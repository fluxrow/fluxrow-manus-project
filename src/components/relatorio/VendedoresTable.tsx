import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface VendedoresTableProps {
  data: Array<{ nome: string; leads: number }>;
}

export const VendedoresTable = ({ data }: VendedoresTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vendedor</TableHead>
            <TableHead className="text-right">Leads</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((vendedor, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{vendedor.nome}</TableCell>
              <TableCell className="text-right">{vendedor.leads}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
