import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface LossReasonsChartProps {
  data: Array<{ motivo: string; qtd: number; perc: number }>;
}

const COLORS = [
  'hsl(0, 84%, 60%)',
  'hsl(25, 95%, 53%)',
  'hsl(45, 93%, 47%)',
  'hsl(142, 76%, 36%)',
  'hsl(217, 91%, 60%)',
  'hsl(262, 83%, 58%)',
];

export const LossReasonsChart = ({ data }: LossReasonsChartProps) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="qtd"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number, name: string, props: any) => [
              `${value} oportunidades (${props.payload.perc.toFixed(1)}%)`,
              props.payload.motivo
            ]}
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
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value, entry: any) => (
              <span style={{ color: '#ffffff' }}>{entry.payload.motivo}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
