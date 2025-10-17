import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ConversionCompareChartProps {
  data: Array<{ fonte: string; whats: number; form: number }>;
}

export const ConversionCompareChart = ({ data }: ConversionCompareChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="fonte" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Legend 
            formatter={(value) => {
              if (value === 'whats') return 'WhatsApp';
              if (value === 'form') return 'Formulário';
              return value;
            }}
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Bar dataKey="whats" fill="hsl(142, 76%, 36%)" radius={[8, 8, 0, 0]} />
          <Bar dataKey="form" fill="hsl(217, 91%, 60%)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
