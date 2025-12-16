import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency } from "@/utils/formatters";

interface CategoriaItem {
  categoria: string;
  qtd: number;
  custo: number;
}

interface CategoriasTableProps {
  data: CategoriaItem[];
  title?: string;
}

export const CategoriasTable = ({ data, title }: CategoriasTableProps) => {
  const total = data.reduce((sum, item) => sum + item.qtd, 0);
  
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[45%]">Categoria</TableHead>
            <TableHead className="text-right w-[25%]">Qtd</TableHead>
            <TableHead className="text-right w-[30%] whitespace-nowrap">Custo/Lead</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-sm">{item.categoria}</TableCell>
              <TableCell className="text-right">{item.qtd}</TableCell>
              <TableCell className="text-right whitespace-nowrap">{formatCurrency(item.custo)}</TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-muted/50 font-semibold">
            <TableCell>TOTAL</TableCell>
            <TableCell className="text-right">{total}</TableCell>
            <TableCell className="text-right">-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
