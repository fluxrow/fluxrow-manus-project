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
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Token</p>
                  <p className="text-2xl font-bold">
                    {results.token_valido ? "✅ Válido" : "❌ Inválido"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Integrações</p>
                  <p className="text-2xl font-bold">
                    {results.integracoes?.length || 0}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Widgets Mapeados</p>
                  <p className="text-2xl font-bold">
                    {Object.keys(results.widgets_por_integracao || {}).length}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Erros</p>
                  <p className="text-2xl font-bold text-destructive">
                    {results.erros?.length || 0}
                  </p>
                </div>
              </div>
            </Card>

            {/* Account Info */}
            {results.account_info && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">👤 Informações da Conta</h2>
                <pre className="p-4 bg-muted rounded overflow-x-auto text-xs">
                  {JSON.stringify(results.account_info, null, 2)}
                </pre>
              </Card>
            )}

            {/* Client Info */}
            {results.client_info && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">🏢 Informações do Cliente</h2>
                <pre className="p-4 bg-muted rounded overflow-x-auto text-xs">
                  {JSON.stringify(results.client_info, null, 2)}
                </pre>
              </Card>
            )}

            {/* Integrações */}
            {results.integracoes && results.integracoes.length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">🔗 Integrações Encontradas</h2>
                <div className="space-y-4">
                  {results.integracoes.map((integration: any, idx: number) => (
                    <div key={idx} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">
                            {integration.name || integration.platform || `Integração ${idx + 1}`}
                          </h3>
                          <code className="text-xs text-muted-foreground">
                            ID: {integration.id}
                          </code>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {integration.platform || 'N/A'}
                        </span>
                      </div>
                      
                      <details className="text-sm">
                        <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                          Ver detalhes completos
                        </summary>
                        <pre className="mt-2 p-3 bg-muted rounded overflow-x-auto text-xs">
                          {JSON.stringify(integration, null, 2)}
                        </pre>
                      </details>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Widgets por Integração */}
            {Object.keys(results.widgets_por_integracao || {}).length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">📊 Widgets Disponíveis por Integração</h2>
                <div className="space-y-6">
                  {Object.entries(results.widgets_por_integracao).map(([integrationName, data]: [string, any]) => (
                    <div key={integrationName} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">{integrationName}</h3>
                        <code className="text-xs text-muted-foreground">
                          ID: {data.integration_id}
                        </code>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          Total de widgets: {Array.isArray(data.widgets) ? data.widgets.length : 'N/A'}
                        </p>
                        
                        <details className="text-sm">
                          <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                            Ver lista completa de widgets
                          </summary>
                          <pre className="mt-2 p-3 bg-muted rounded overflow-x-auto text-xs max-h-64">
                            {JSON.stringify(data.widgets, null, 2)}
                          </pre>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Exemplos de Valores */}
            {Object.keys(results.exemplo_valores || {}).length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">🎯 Exemplos de Valores (Widgets Testados)</h2>
                <div className="space-y-4">
                  {Object.entries(results.exemplo_valores).map(([integrationName, data]: [string, any]) => (
                    <div key={integrationName} className="border rounded-lg p-4 space-y-2">
                      <div>
                        <h3 className="font-bold text-lg">{integrationName}</h3>
                        <p className="text-sm text-muted-foreground">
                          Widget: <code className="bg-muted px-1 py-0.5 rounded">{data.widget}</code>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Período: {data.periodo}
                        </p>
                      </div>
                      
                      <details className="text-sm">
                        <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                          Ver dados retornados
                        </summary>
                        <pre className="mt-2 p-3 bg-muted rounded overflow-x-auto text-xs">
                          {JSON.stringify(data.data, null, 2)}
                        </pre>
                      </details>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Erros */}
            {results.erros && results.erros.length > 0 && (
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
