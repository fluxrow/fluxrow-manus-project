import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const AdminTestReportei = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleTest = async () => {
    setLoading(true);
    setResults(null);
    
    try {
      console.log("🚀 Chamando edge function reportei-test...");
      
      const { data, error } = await supabase.functions.invoke("reportei-test", {
        body: {}
      });

      if (error) {
        console.error("❌ Erro:", error);
        toast({
          title: "Erro ao testar API",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      console.log("✅ Resposta recebida:", data);
      setResults(data);
      
      toast({
        title: data.token_valido ? "✅ Token válido!" : "❌ Token inválido",
        description: `Testados ${Object.keys(data.endpoints_testados).length} endpoints`,
      });
    } catch (error) {
      console.error("💥 Erro ao chamar função:", error);
      toast({
        title: "Erro ao testar API",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Teste API Reportei</h1>
            <p className="text-muted-foreground mt-2">
              Validar token e explorar endpoints disponíveis
            </p>
          </div>
          
          <Button 
            onClick={handleTest} 
            disabled={loading}
            size="lg"
            className="gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Testando..." : "🧪 Testar API"}
          </Button>
        </div>

        {results && (
          <div className="space-y-4">
            {/* Status Geral */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">📊 Status Geral</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Token</p>
                  <p className="text-2xl font-bold">
                    {results.token_valido ? "✅ Válido" : "❌ Inválido"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Endpoints Testados</p>
                  <p className="text-2xl font-bold">
                    {Object.keys(results.endpoints_testados).length}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Erros</p>
                  <p className="text-2xl font-bold text-destructive">
                    {results.erros.length}
                  </p>
                </div>
              </div>
            </Card>

            {/* Endpoints Testados */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">🔗 Endpoints Testados</h2>
              <div className="space-y-4">
                {Object.entries(results.endpoints_testados).map(([endpoint, data]: [string, any]) => (
                  <div key={endpoint} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                        {endpoint}
                      </code>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          data.sucesso 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' 
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                        }`}>
                          Status {data.status}
                        </span>
                        {data.sucesso ? "✅" : "❌"}
                      </div>
                    </div>
                    
                    {data.periodo && (
                      <p className="text-sm text-muted-foreground">
                        Período: {data.periodo}
                      </p>
                    )}
                    
                    <details className="text-sm">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        Ver resposta completa
                      </summary>
                      <pre className="mt-2 p-3 bg-muted rounded overflow-x-auto text-xs">
                        {JSON.stringify(data.data || data.erro, null, 2)}
                      </pre>
                    </details>
                  </div>
                ))}
              </div>
            </Card>

            {/* Erros */}
            {results.erros.length > 0 && (
              <Card className="p-6 border-destructive">
                <h2 className="text-2xl font-bold mb-4 text-destructive">⚠️ Erros</h2>
                <ul className="space-y-2">
                  {results.erros.map((erro: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {erro}
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Resposta Completa */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">📄 Resposta Completa (JSON)</h2>
              <pre className="p-4 bg-muted rounded overflow-x-auto text-xs">
                {JSON.stringify(results, null, 2)}
              </pre>
            </Card>
          </div>
        )}

        {!results && !loading && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">
              Clique no botão "Testar API" para começar
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminTestReportei;
