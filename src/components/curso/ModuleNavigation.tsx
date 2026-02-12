import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface ModuleInfo {
  id: number;
  title: string;
  route: string;
}

const allModules: ModuleInfo[] = [
  { id: 1, title: 'Fundamentos da IA para Negócios', route: '/modulos/1-premium' },
  { id: 2, title: 'Automação de Vendas com IA', route: '/modulos/2-premium' },
];

interface ModuleNavigationProps {
  currentModuleId: number;
}

const ModuleNavigation: React.FC<ModuleNavigationProps> = ({ currentModuleId }) => {
  const navigate = useNavigate();
  const currentIndex = allModules.findIndex(m => m.id === currentModuleId);
  const prev = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const next = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  return (
    <>
      {/* Top bar */}
      {/* Top bar */}
      <div className="sticky top-16 z-30 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2.5">
          <button
            onClick={() => navigate('/modulos')}
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors min-w-[40px]"
          >
            <Home className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Todos os Módulos</span>
          </button>

          <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
            {currentModuleId}/{allModules.length}
          </span>

          <div className="flex items-center gap-1 sm:gap-2">
            {prev && (
              <button
                onClick={() => navigate(prev.route)}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors p-1.5 sm:p-0 rounded-lg sm:rounded-none active:bg-white/10 sm:active:bg-transparent"
                title={`Módulo ${prev.id}: ${prev.title}`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>
            )}
            {next && (
              <button
                onClick={() => navigate(next.route)}
                className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors p-1.5 sm:p-0 rounded-lg sm:rounded-none active:bg-cyan-500/10 sm:active:bg-transparent"
                title={`Módulo ${next.id}: ${next.title}`}
              >
                <span className="hidden sm:inline">Próximo</span>
                <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="border-t border-white/10 bg-[#0f0f0f] py-4 sm:py-6 px-3 sm:px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          {prev ? (
            <button
              onClick={() => navigate(prev.route)}
              className="flex-1 flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/5 active:bg-white/10 transition-all text-left group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-500">Módulo anterior</div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors truncate">
                  {prev.title}
                </div>
              </div>
            </button>
          ) : <div className="hidden sm:block flex-1" />}

          {next ? (
            <button
              onClick={() => navigate(next.route)}
              className="flex-1 flex items-center justify-end gap-3 p-3 sm:p-4 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5 active:bg-cyan-500/10 transition-all text-right group"
            >
              <div className="min-w-0">
                <div className="text-xs text-cyan-400/70">Próximo módulo</div>
                <div className="text-sm font-medium text-cyan-300 group-hover:text-cyan-200 transition-colors truncate">
                  {next.title}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors shrink-0" />
            </button>
          ) : <div className="hidden sm:block flex-1" />}
        </div>
      </div>
    </>
  );
};

export default ModuleNavigation;
