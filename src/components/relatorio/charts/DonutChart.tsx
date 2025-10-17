import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { formatCurrency } from '@/utils/formatters';

interface DonutChartProps {
  data: Array<{ canal: string; valor: number }>;
}

const COLORS = {
  'Google Ads': 'hsl(217, 91%, 60%)',
  'Meta Ads': 'hsl(262, 83%, 58%)',
};

export const DonutChart = ({ data }: DonutChartProps) => {
  const chartData = data.map(item => ({
    name: item.canal,
    value: item.valor,
  }));

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-sm font-bold"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-foreground">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
