import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatNumber } from "@/utils/formatters";

interface URLData {
  url: string;
  cliques: number;
  gasto: number;
  impressoes: number;
  ctr: string;
  cpc: number;
}

interface URLsTableProps {
  data: URLData[];
}

export const URLsTable = ({ data }: URLsTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>URL de Destino</TableHead>
            <TableHead className="text-right">Cliques</TableHead>
            <TableHead className="text-right">Gasto</TableHead>
            <TableHead className="text-right">Impressões</TableHead>
            <TableHead className="text-right">CTR</TableHead>
            <TableHead className="text-right">CPC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium max-w-[300px] truncate">
                {item.url}
              </TableCell>
              <TableCell className="text-right">{formatNumber(item.cliques)}</TableCell>
              <TableCell className="text-right">{formatCurrency(item.gasto)}</TableCell>
              <TableCell className="text-right">{formatNumber(item.impressoes)}</TableCell>
              <TableCell className="text-right">{item.ctr}</TableCell>
              <TableCell className="text-right">{formatCurrency(item.cpc)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
