
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/providers/AuthProvider";
import type { Profile } from "@/types/auth";

export function useProfile() {
  const { session } = useAuth();

  return useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: async (): Promise<Profile | null> => {
      if (!session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });
}
