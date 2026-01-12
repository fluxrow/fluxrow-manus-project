export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contratos_assinados: {
        Row: {
          assinatura_cargo_responsavel: string | null
          assinatura_cpf_responsavel: string | null
          assinatura_nome_responsavel: string | null
          cnpj_contratada: string | null
          cnpj_contratante: string | null
          contratada_assinatura_cargo: string | null
          contratada_assinatura_cpf: string | null
          contratada_assinatura_nome: string | null
          contratada_data_assinatura: string | null
          contratante_assinatura_cargo: string | null
          contratante_assinatura_cpf: string | null
          contratante_assinatura_nome: string | null
          contratante_data_assinatura: string | null
          cpf_contratada: string
          cpf_contratante: string
          created_at: string
          data_assinatura: string
          email_contratante: string | null
          email_enviado: boolean
          id: string
          nome_contratada: string
          nome_contratante: string
          status: string
          updated_at: string
        }
        Insert: {
          assinatura_cargo_responsavel?: string | null
          assinatura_cpf_responsavel?: string | null
          assinatura_nome_responsavel?: string | null
          cnpj_contratada?: string | null
          cnpj_contratante?: string | null
          contratada_assinatura_cargo?: string | null
          contratada_assinatura_cpf?: string | null
          contratada_assinatura_nome?: string | null
          contratada_data_assinatura?: string | null
          contratante_assinatura_cargo?: string | null
          contratante_assinatura_cpf?: string | null
          contratante_assinatura_nome?: string | null
          contratante_data_assinatura?: string | null
          cpf_contratada: string
          cpf_contratante: string
          created_at?: string
          data_assinatura?: string
          email_contratante?: string | null
          email_enviado?: boolean
          id?: string
          nome_contratada: string
          nome_contratante: string
          status?: string
          updated_at?: string
        }
        Update: {
          assinatura_cargo_responsavel?: string | null
          assinatura_cpf_responsavel?: string | null
          assinatura_nome_responsavel?: string | null
          cnpj_contratada?: string | null
          cnpj_contratante?: string | null
          contratada_assinatura_cargo?: string | null
          contratada_assinatura_cpf?: string | null
          contratada_assinatura_nome?: string | null
          contratada_data_assinatura?: string | null
          contratante_assinatura_cargo?: string | null
          contratante_assinatura_cpf?: string | null
          contratante_assinatura_nome?: string | null
          contratante_data_assinatura?: string | null
          cpf_contratada?: string
          cpf_contratante?: string
          created_at?: string
          data_assinatura?: string
          email_contratante?: string | null
          email_enviado?: boolean
          id?: string
          nome_contratada?: string
          nome_contratante?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      relatorios_semanais: {
        Row: {
          conversas_mensagem: Json | null
          created_at: string
          custo_lead_medio: number
          dados_analytics: Json | null
          dados_asset_groups: Json | null
          dados_categorias: Json | null
          dados_google: Json | null
          dados_instagram: Json | null
          dados_meta: Json | null
          dados_rd_station: Json | null
          dados_urls: Json | null
          dados_vendedores: Json | null
          dados_whatsapp_conversoes: Json | null
          data_fim: string
          data_inicio: string
          gerado_automaticamente: boolean
          id: string
          investimento_total: number
          leads_totais: number
          periodo: string
          updated_at: string
        }
        Insert: {
          conversas_mensagem?: Json | null
          created_at?: string
          custo_lead_medio: number
          dados_analytics?: Json | null
          dados_asset_groups?: Json | null
          dados_categorias?: Json | null
          dados_google?: Json | null
          dados_instagram?: Json | null
          dados_meta?: Json | null
          dados_rd_station?: Json | null
          dados_urls?: Json | null
          dados_vendedores?: Json | null
          dados_whatsapp_conversoes?: Json | null
          data_fim: string
          data_inicio: string
          gerado_automaticamente?: boolean
          id?: string
          investimento_total: number
          leads_totais: number
          periodo: string
          updated_at?: string
        }
        Update: {
          conversas_mensagem?: Json | null
          created_at?: string
          custo_lead_medio?: number
          dados_analytics?: Json | null
          dados_asset_groups?: Json | null
          dados_categorias?: Json | null
          dados_google?: Json | null
          dados_instagram?: Json | null
          dados_meta?: Json | null
          dados_rd_station?: Json | null
          dados_urls?: Json | null
          dados_vendedores?: Json | null
          dados_whatsapp_conversoes?: Json | null
          data_fim?: string
          data_inicio?: string
          gerado_automaticamente?: boolean
          id?: string
          investimento_total?: number
          leads_totais?: number
          periodo?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
