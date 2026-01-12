import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { MessageCircle } from 'lucide-react';

interface WhatsAppConversionsData {
  meta: {
    quantidade: number;
    investimento: number;
    custo_por_conversao: number;
  };
  google: {
    quantidade: number;
    investimento: number;
    custo_por_conversao: number;
  };
  totais: {
    quantidade: number;
    investimento: number;
    custo_medio: number;
  };
}

interface WhatsAppConversionsTableProps {
  data: WhatsAppConversionsData | null;
}

export function WhatsAppConversionsTable({ data }: WhatsAppConversionsTableProps) {
  if (!data) return null;

  const { meta, google, totais } = data;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-green-600" />
          Conversões WhatsApp por Plataforma
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plataforma</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Investimento</TableHead>
              <TableHead className="text-right">Custo/Conversão</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Meta Ads
                </span>
              </TableCell>
              <TableCell className="text-right">{formatNumber(meta.quantidade)}</TableCell>
              <TableCell className="text-right">{formatCurrency(meta.investimento)}</TableCell>
              <TableCell className="text-right">{formatCurrency(meta.custo_por_conversao)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  Google Ads
                </span>
              </TableCell>
              <TableCell className="text-right">{formatNumber(google.quantidade)}</TableCell>
              <TableCell className="text-right">{formatCurrency(google.investimento)}</TableCell>
              <TableCell className="text-right">{formatCurrency(google.custo_por_conversao)}</TableCell>
            </TableRow>
            <TableRow className="bg-muted/50 font-semibold">
              <TableCell>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  TOTAL
                </span>
              </TableCell>
              <TableCell className="text-right">{formatNumber(totais.quantidade)}</TableCell>
              <TableCell className="text-right">{formatCurrency(totais.investimento)}</TableCell>
              <TableCell className="text-right">{formatCurrency(totais.custo_medio)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
