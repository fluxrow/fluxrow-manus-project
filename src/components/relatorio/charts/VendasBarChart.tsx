import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '@/utils/formatters';

interface VendasBarChartProps {
  data: Array<{ vendedor: string; vendas: number; receita: number }>;
}

export const VendasBarChart = ({ data }: VendasBarChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="vendedor" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            formatter={(value: number, name: string) => {
              if (name === 'receita') return formatCurrency(value);
              return value;
            }}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Bar dataKey="vendas" fill="hsl(262, 83%, 58%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
