import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatNumber } from '@/utils/formatters';

interface AssetGroupChartProps {
  data: Array<{ grupo: string; tipo: string; conversoes: number }>;
}

const COLORS = [
  'hsl(262, 83%, 58%)',
  'hsl(217, 91%, 60%)',
  'hsl(142, 76%, 36%)',
  'hsl(47, 96%, 53%)',
  'hsl(340, 82%, 52%)',
];

export const AssetGroupChart = ({ data }: AssetGroupChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="tipo" 
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
              backgroundColor: 'hsl(222.2, 84%, 12%)',
              border: '1px solid hsl(217, 91%, 60%)',
              borderRadius: '8px',
              color: '#ffffff'
            }}
            labelStyle={{
              color: '#ffffff',
              fontWeight: 'bold'
            }}
          />
          <Bar dataKey="conversoes" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
