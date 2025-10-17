import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatNumber } from '@/utils/formatters';

interface SessionsBySourceChartProps {
  data: Array<{ origem: string; sessoes: number; novos: number; eng_rate: number }>;
}

export const SessionsBySourceChart = ({ data }: SessionsBySourceChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="origem" 
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
          <Bar dataKey="sessoes" fill="hsl(217, 91%, 60%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
