import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ConversasMensagemTableProps {
  facebook: number;
  instagram: number;
}

export const ConversasMensagemTable = ({ facebook, instagram }: ConversasMensagemTableProps) => {
  const total = facebook + instagram;
  
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plataforma</TableHead>
            <TableHead className="text-right">Conversas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Facebook</TableCell>
            <TableCell className="text-right">{facebook}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Instagram</TableCell>
            <TableCell className="text-right">{instagram}</TableCell>
          </TableRow>
          <TableRow className="font-bold bg-muted/50">
            <TableCell>Total</TableCell>
            <TableCell className="text-right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
