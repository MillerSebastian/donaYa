import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "your-anon-key";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Tipos para la base de datos
export interface Donation {
  id?: string;
  organization_id: string;
  category: "food" | "clothing" | "housing" | "voluntary";
  amount: number;
  currency: string;
  donor_name?: string;
  donor_email?: string;
  donor_phone?: string;
  payment_status: "pending" | "completed" | "failed" | "refunded";
  payment_intent_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Organization {
  id: string;
  name: string;
  description: string;
  website?: string;
  logo_url?: string;
  is_active: boolean;
  created_at?: string;
}

export interface ImpactData {
  id?: string;
  organization_id: string;
  category: string;
  metric_name: string;
  value: number;
  period: string;
  created_at?: string;
}

// Funciones para donaciones
export const donationService = {
  // Crear nueva donación
  async createDonation(
    donation: Omit<Donation, "id" | "created_at" | "updated_at">
  ) {
    const { data, error } = await supabase
      .from("donations")
      .insert([donation])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Obtener donaciones por organización
  async getDonationsByOrganization(orgId: string) {
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .eq("organization_id", orgId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  // Actualizar estado de pago
  async updatePaymentStatus(
    donationId: string,
    status: Donation["payment_status"],
    paymentIntentId?: string
  ) {
    const { data, error } = await supabase
      .from("donations")
      .update({
        payment_status: status,
        payment_intent_id: paymentIntentId,
        updated_at: new Date().toISOString(),
      })
      .eq("id", donationId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};

// Funciones para organizaciones
export const organizationService = {
  // Obtener organización por ID
  async getOrganization(orgId: string) {
    const { data, error } = await supabase
      .from("organizations")
      .select("*")
      .eq("id", orgId)
      .eq("is_active", true)
      .single();

    if (error) throw error;
    return data;
  },

  // Obtener todas las organizaciones activas
  async getActiveOrganizations() {
    const { data, error } = await supabase
      .from("organizations")
      .select("*")
      .eq("is_active", true)
      .order("name");

    if (error) throw error;
    return data;
  },
};

// Funciones para datos de impacto
export const impactService = {
  // Obtener datos de impacto por organización y categoría
  async getImpactData(orgId: string, category?: string) {
    let query = supabase
      .from("impact_data")
      .select("*")
      .eq("organization_id", orgId)
      .order("created_at", { ascending: false });

    if (category) {
      query = query.eq("category", category);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
  },

  // Crear nuevo dato de impacto
  async createImpactData(impactData: Omit<ImpactData, "id" | "created_at">) {
    const { data, error } = await supabase
      .from("impact_data")
      .insert([impactData])
      .select()
      .single();

    if (error) throw error;
    return data;
  },
};
