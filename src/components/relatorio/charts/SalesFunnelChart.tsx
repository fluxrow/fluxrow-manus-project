import { formatNumber } from '@/utils/formatters';

interface SalesFunnelChartProps {
  data: Array<{ etapa: string; qtd: number; perc: number }>;
}

export const SalesFunnelChart = ({ data }: SalesFunnelChartProps) => {
  const maxWidth = 100;
  
  return (
    <div className="w-full py-4">
      <div className="space-y-4">
        {data.map((item, index) => {
          const width = (item.qtd / data[0].qtd) * maxWidth;
          const isLast = index === data.length - 1;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`
                  relative bg-gradient-to-r from-primary to-primary/70 
                  rounded-lg p-4 transition-all duration-300 hover:scale-105
                  ${isLast ? 'from-green-500 to-green-600' : ''}
                `}
                style={{ width: `${width}%`, minWidth: '200px' }}
              >
                <div className="flex items-center justify-between text-white">
                  <span className="font-semibold text-sm">{item.etapa}</span>
                  <div className="text-right">
                    <span className="font-bold text-lg">{formatNumber(item.qtd)}</span>
                    {index > 0 && (
                      <span className="block text-xs opacity-90">
                        {item.perc.toFixed(2)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {index < data.length - 1 && (
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-primary/70 my-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
