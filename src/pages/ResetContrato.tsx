import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, RotateCcw } from "lucide-react";

export default function ResetContrato() {
  const [resetando, setResetando] = useState(false);

  const handleReset = async () => {
    setResetando(true);

    try {
      const { data, error } = await supabase.functions.invoke('resetar-contrato', {
        body: { 
          contratoId: '678ed11f-b9cb-44c0-9615-f23d4c09a9a9'
        }
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      toast.success("Contrato resetado com sucesso! Status voltou para 'pendente'.");
      
    } catch (error: any) {
      console.error('Erro ao resetar contrato:', error);
      toast.error("Erro ao resetar contrato. Tente novamente.");
    } finally {
      setResetando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RotateCcw className="h-5 w-5 text-primary" />
            Resetar Contrato de Teste
          </CardTitle>
          <CardDescription>
            Esta ação irá resetar o contrato para o estado inicial (pendente)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <strong>ID do Contrato:</strong><br/>
                678ed11f-b9cb-44c0-9615-f23d4c09a9a9
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>CNPJ:</strong> 34.325.200/0001-36
              </p>
            </div>

            <Button 
              onClick={handleReset}
              className="w-full"
              size="lg"
              disabled={resetando}
            >
              {resetando ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Resetando...
                </>
              ) : (
                <>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Resetar Contrato
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
