import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/utils/formatters";

interface CategoriasTableProps {
  data: Array<{ categoria: string; qtd: number; custo: number }>;
}

export const CategoriasTable = ({ data }: CategoriasTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Categoria de Produto</TableHead>
            <TableHead className="text-right">Quantidade</TableHead>
            <TableHead className="text-right">Custo de Conversão</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.categoria}</TableCell>
              <TableCell className="text-right">{item.qtd}</TableCell>
              <TableCell className="text-right">{formatCurrency(item.custo)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
