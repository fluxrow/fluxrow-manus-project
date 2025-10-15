import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, FileText, CheckCircle2 } from "lucide-react";

interface ContratoData {
  id: string;
  nome_contratante: string;
  cpf_contratante: string;
  cnpj_contratante: string;
  nome_contratada: string;
  cpf_contratada: string;
  cnpj_contratada: string;
  status: string;
  created_at: string;
}

// Mapeamento de clientes para CNPJ da CONTRATANTE (sem pontuação para busca)
const clienteContratoMap: Record<string, string> = {
  'amanda-neves': '61153521000173',
  'match-solutions': '34325200000136'
};

export default function ContratoAssinatura() {
  const { cliente } = useParams();
  const navigate = useNavigate();
  
  // Estados
  const [validando, setValidando] = useState(false);
  const [contratoValidado, setContratoValidado] = useState(false);
  const [contratoData, setContratoData] = useState<ContratoData | null>(null);
  const papelEmpresa = 'contratada'; // Fluxrow sempre assina como contratada
  
  // Estados para assinatura
  const [nomeResponsavel, setNomeResponsavel] = useState("");
  const [cpfResponsavel, setCpfResponsavel] = useState("");
  const [cargoResponsavel, setCargoResponsavel] = useState("");
  const [assinando, setAssinando] = useState(false);

  // Formatar CNPJ
  const formatarCNPJ = (valor: string) => {
    const numeros = valor.replace(/\D/g, "");
    return numeros
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .substring(0, 18);
  };

  // Formatar CPF
  const formatarCPF = (valor: string) => {
    const numeros = valor.replace(/\D/g, "");
    return numeros
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1-$2")
      .substring(0, 14);
  };

  // Carregar contrato automaticamente baseado no cliente da URL
  useEffect(() => {
    if (cliente && clienteContratoMap[cliente]) {
      carregarContratoDoCliente(clienteContratoMap[cliente]);
    } else if (cliente) {
      toast.error("Cliente não encontrado");
      navigate('/');
    }
  }, [cliente]);

  const carregarContratoDoCliente = async (cnpjContratante: string) => {
    setValidando(true);
    
    try {
      const { data, error } = await supabase
        .from('contratos_assinados')
        .select('*')
        .eq('cnpj_contratante', cnpjContratante)
        .single();
      
      if (error) throw error;
      
      setContratoData(data);
      setContratoValidado(true);
      toast.success('Contrato carregado! Você está assinando como CONTRATADA.');
    } catch (error: any) {
      console.error('Erro ao carregar contrato:', error);
      toast.error('Erro ao carregar contrato. Verifique se o contrato existe.');
      setTimeout(() => navigate('/'), 2000);
    } finally {
      setValidando(false);
    }
  };

  const handleAssinar = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeResponsavel || !cpfResponsavel || !cargoResponsavel) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (!contratoData) {
      toast.error("Erro: dados do contrato não encontrados");
      return;
    }

    setAssinando(true);


    try {
      const { data, error } = await supabase.functions.invoke('assinar-contrato', {
        body: {
          contratoId: contratoData.id,
          nomeResponsavel,
          cpfResponsavel,
          cargoResponsavel,
          papel: papelEmpresa
        }
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      toast.success("Contrato assinado com sucesso! Email de confirmação enviado.");
      
      // Aguardar 2 segundos e redirecionar
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error: any) {
      console.error('Erro ao assinar contrato:', error);
      toast.error("Erro ao processar assinatura. Tente novamente.");
    } finally {
      setAssinando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Assinatura Digital de Contrato
            </h1>
            <p className="text-muted-foreground">
              Sistema seguro de assinatura eletrônica
            </p>
          </div>

          {validando ? (
            <Card className="border-2">
              <CardContent className="py-12">
                <div className="text-center space-y-4">
                  <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
                  <p className="text-lg text-muted-foreground">Carregando contrato...</p>
                </div>
              </CardContent>
            </Card>
          ) : contratoValidado ? (
            // Exibição do contrato e formulário de assinatura
            <div className="space-y-6">
              {/* Card com dados do contrato */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Dados do Contrato
                  </CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-3">
                   {/* Badge indicando o papel da empresa */}
                   <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                     <CheckCircle2 className="h-5 w-5 text-primary" />
                      <p className="font-semibold text-primary">
                        Você está assinando como: CONTRATADA
                     </p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <p className="text-sm text-muted-foreground">Contratante</p>
                       <p className="font-semibold">{contratoData?.nome_contratante}</p>
                     </div>
                     <div>
                       <p className="text-sm text-muted-foreground">CNPJ</p>
                       <p className="font-semibold">{formatarCNPJ(contratoData?.cnpj_contratante || '')}</p>
                     </div>
                     <div>
                       <p className="text-sm text-muted-foreground">Contratada</p>
                       <p className="font-semibold">{contratoData?.nome_contratada}</p>
                     </div>
                     <div>
                       <p className="text-sm text-muted-foreground">CNPJ</p>
                       <p className="font-semibold">{formatarCNPJ(contratoData?.cnpj_contratada || '')}</p>
                     </div>
                     <div>
                       <p className="text-sm text-muted-foreground">Status</p>
                       <p className="font-semibold capitalize">{contratoData?.status}</p>
                     </div>
                   </div>
                 </CardContent>
              </Card>

              {/* Formulário de assinatura */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Assinatura Digital
                  </CardTitle>
                  <CardDescription>
                    Preencha os dados do responsável pela assinatura
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAssinar} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo do Responsável</Label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Nome completo"
                        value={nomeResponsavel}
                        onChange={(e) => setNomeResponsavel(e.target.value)}
                        disabled={assinando}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF do Responsável</Label>
                      <Input
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        value={cpfResponsavel}
                        onChange={(e) => setCpfResponsavel(formatarCPF(e.target.value))}
                        maxLength={14}
                        disabled={assinando}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo/Função</Label>
                      <Input
                        id="cargo"
                        type="text"
                        placeholder="Ex: Diretor, Sócio, Gerente"
                        value={cargoResponsavel}
                        onChange={(e) => setCargoResponsavel(e.target.value)}
                        disabled={assinando}
                      />
                    </div>

                    <div className="pt-4 space-y-3">
                       <div className="p-4 bg-muted/50 rounded-lg border">
                         <p className="text-sm text-muted-foreground">
                           Ao clicar em "Assinar Contrato", você confirma que leu e concorda com todos os termos e condições descritos no contrato, e que possui autorização para representar a empresa contratada.
                         </p>
                       </div>

                      <Button 
                        type="submit" 
                        className="w-full"
                        size="lg"
                        disabled={assinando}
                      >
                        {assinando ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processando Assinatura...
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Assinar Contrato Digitalmente
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
