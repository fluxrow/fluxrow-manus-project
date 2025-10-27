import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatCurrency, formatNumber } from "@/utils/formatters";

interface PlataformasTableProps {
  google: {
    investimento: number;
    leads: number;
    custo_clique: number;
  };
  instagram: {
    investimento: number;
    leads: number;
    custo_lead: number;
  };
}

export const PlataformasTable = ({ google, instagram }: PlataformasTableProps) => {
  const custoLeadGoogle = google.investimento / google.leads;
  
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plataforma</TableHead>
            <TableHead className="text-right">Investimento</TableHead>
            <TableHead className="text-right">Leads</TableHead>
            <TableHead className="text-right">Custo/Lead</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">GOOGLE</TableCell>
            <TableCell className="text-right">{formatCurrency(google.investimento)}</TableCell>
            <TableCell className="text-right">{formatNumber(google.leads)}</TableCell>
            <TableCell className="text-right">{formatCurrency(custoLeadGoogle)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">META</TableCell>
            <TableCell className="text-right">{formatCurrency(instagram.investimento)}</TableCell>
            <TableCell className="text-right">{formatNumber(instagram.leads)}</TableCell>
            <TableCell className="text-right">{formatCurrency(instagram.custo_lead)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
