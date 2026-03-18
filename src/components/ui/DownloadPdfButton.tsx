import { Download } from 'lucide-react';

export default function DownloadPdfButton() {
  return (
    <button
      onClick={() => window.print()}
      className="fixed bottom-6 right-6 z-50 print:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all shadow-lg cursor-pointer"
      aria-label="Baixar como PDF"
    >
      <Download className="w-4 h-4" />
      <span className="text-sm font-medium">Baixar PDF</span>
    </button>
  );
}
