import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export interface SidebarSection {
  id: string;
  title: string;
  items: { id: string; label: string }[];
}

interface ProgressSidebarProps {
  moduleId: string;
  sections: SidebarSection[];
  activeId?: string;
  onNavigate?: (id: string) => void;
}

const STORAGE_KEY_PREFIX = 'fluxrow_progress_';

const ProgressSidebar: React.FC<ProgressSidebarProps> = ({ moduleId, sections, activeId, onNavigate }) => {
  const storageKey = `${STORAGE_KEY_PREFIX}${moduleId}`;
  const [completed, setCompleted] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch { return []; }
  });
  const [expandedSections, setExpandedSections] = useState<string[]>(sections.map(s => s.id));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed, storageKey]);

  const allItems = sections.flatMap(s => s.items);
  const progress = allItems.length > 0 ? Math.round((completed.length / allItems.length) * 100) : 0;

  const toggleItem = useCallback((itemId: string) => {
    setCompleted(prev => prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]);
  }, []);

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections(prev => prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]);
  }, []);

  const handleNavigate = (id: string) => {
    onNavigate?.(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Progress header */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold font-space-grotesk text-gray-400 uppercase tracking-wide">Progresso</span>
          <span className="text-xs font-bold font-space-grotesk text-cyan-400">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-cyan-500 [&>div]:to-blue-500" />
        <p className="text-[10px] text-gray-500 font-space-grotesk mt-1.5">
          {completed.length} de {allItems.length} concluídos
        </p>
      </div>

      {/* Sections */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {sections.map(section => {
          const sectionCompleted = section.items.filter(i => completed.includes(i.id)).length;
          const isExpanded = expandedSections.includes(section.id);
          return (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left hover:bg-gray-800/50 transition-colors"
              >
                {isExpanded ? <ChevronDown className="w-3 h-3 text-gray-400" /> : <ChevronRight className="w-3 h-3 text-gray-400" />}
                <span className="flex-1 text-xs font-bold font-space-grotesk text-gray-200 truncate">{section.title}</span>
                <span className="text-[10px] font-space-grotesk text-gray-500">{sectionCompleted}/{section.items.length}</span>
              </button>
              {isExpanded && (
                <div className="ml-3 pl-3 border-l border-gray-700/50 space-y-0.5 mt-1">
                  {section.items.map(item => (
                    <div
                      key={item.id}
                      className={cn(
                        "flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors",
                        activeId === item.id ? "bg-cyan-950/40 border border-cyan-500/30" : "hover:bg-gray-800/30"
                      )}
                    >
                      <Checkbox
                        checked={completed.includes(item.id)}
                        onCheckedChange={() => toggleItem(item.id)}
                        className="h-3.5 w-3.5 border-gray-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                      />
                      <button
                        onClick={() => handleNavigate(item.id)}
                        className="flex-1 text-left text-[11px] font-space-grotesk text-gray-400 hover:text-white transition-colors truncate"
                      >
                        {item.label}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] rounded-2xl border border-gray-700/50 bg-gray-900/60 backdrop-blur-sm overflow-hidden">
        {sidebarContent}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg shadow-cyan-500/30"
        aria-label="Abrir índice"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#0f0f0f] border-l border-gray-700/50 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <span className="text-sm font-bold font-space-grotesk text-white">Índice do Módulo</span>
              <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressSidebar;
