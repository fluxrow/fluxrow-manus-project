import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface DownloadPdfButtonProps {
  contentId?: string;
  filename?: string;
}

export default function DownloadPdfButton({ contentId = 'proposal-content', filename = 'proposta.pdf' }: DownloadPdfButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    const element = document.getElementById(contentId);
    if (!element) {
      console.error(`Element with ID "${contentId}" not found.`);
      return;
    }

    setIsGenerating(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: null,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      });

      const A4_WIDTH_MM = 210;
      const A4_HEIGHT_MM = 297;
      const MARGIN_MM = 10;
      const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_MM * 2;
      const CONTENT_HEIGHT_MM = A4_HEIGHT_MM - MARGIN_MM * 2;

      const scaleFactor = CONTENT_WIDTH_MM / canvas.width;
      const totalHeightMM = canvas.height * scaleFactor;

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

      const pageHeightPx = CONTENT_HEIGHT_MM / scaleFactor;
      let yPos = 0;
      let pageNum = 0;

      while (yPos < canvas.height) {
        const sliceHeight = Math.min(pageHeightPx, canvas.height - yPos);

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = sliceHeight;
        const ctx = tempCanvas.getContext('2d');
        if (!ctx) break;

        ctx.drawImage(canvas, 0, yPos, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);

        const imgData = tempCanvas.toDataURL('image/png');
        const sliceHeightMM = sliceHeight * scaleFactor;

        if (pageNum > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', MARGIN_MM, MARGIN_MM, CONTENT_WIDTH_MM, sliceHeightMM, undefined, 'FAST');

        yPos += sliceHeight;
        pageNum++;
      }

      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="fixed bottom-6 right-6 z-50 print:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-wait"
      aria-label="Baixar como PDF"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm font-medium">Gerando...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Baixar PDF</span>
        </>
      )}
    </button>
  );
}
