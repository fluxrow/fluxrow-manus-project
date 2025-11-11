import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ConversionCompareChartProps {
  data: Array<{ fonte: string; whats: number; form?: number; clique?: number }>;
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
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              color: '#000000',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            labelStyle={{
              color: '#000000',
              fontWeight: 'bold'
            }}
          />
          <Legend 
            formatter={(value) => {
              if (value === 'whats') return 'WhatsApp';
              if (value === 'form') return 'Formulário';
              if (value === 'clique') return 'Clique';
              return value;
            }}
            wrapperStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Bar dataKey="whats" fill="hsl(142, 76%, 36%)" radius={[8, 8, 0, 0]} />
          {data.some(item => item.form !== undefined) && (
            <Bar dataKey="form" fill="hsl(217, 91%, 60%)" radius={[8, 8, 0, 0]} />
          )}
          {data.some(item => item.clique !== undefined) && (
            <Bar dataKey="clique" fill="hsl(262, 83%, 58%)" radius={[8, 8, 0, 0]} />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
