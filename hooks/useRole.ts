
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/providers/AuthProvider";
import type { UserRole } from "@/types/auth";

export function useRole() {
  const { session } = useAuth();

  return useQuery({
    queryKey: ["role", session?.user?.id],
    queryFn: async (): Promise<UserRole[]> => {
      if (!session?.user?.id) return [];
      
      const { data, error } = await supabase
        .from("user_roles")
        .select("*")
        .eq("user_id", session.user.id);

      if (error) throw error;
      return data || [];
    },
    enabled: !!session?.user?.id,
  });
}

export function useIsAdmin() {
  const { data: roles } = useRole();
  return roles?.some(role => role.role === 'admin') || false;
}
