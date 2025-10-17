import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatNumber, formatCurrency } from '@/utils/formatters';

interface FBvsIGCompareChartProps {
  facebook: any;
  instagram: any;
}

export const FBvsIGCompareChart = ({ facebook, instagram }: FBvsIGCompareChartProps) => {
  const data = [
    {
      metrica: "Alcance",
      Facebook: facebook.alcance,
      Instagram: instagram.alcance
    },
    {
      metrica: "Cliques Link",
      Facebook: facebook.cliques_link,
      Instagram: instagram.cliques_link
    },
    {
      metrica: "Conversas",
      Facebook: facebook.conversas,
      Instagram: instagram.conversas
    }
  ];

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="metrica" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            formatter={(value: number) => formatNumber(value)}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend 
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Bar dataKey="Facebook" fill="hsl(217, 91%, 60%)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="Instagram" fill="hsl(340, 82%, 52%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
