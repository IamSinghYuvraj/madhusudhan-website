// utils/saveInteraction.ts
import { supabase } from "@/lib/supabaseClient";
export const saveInteraction = async (
  sessionId: string,
  role: "user" | "assistant",
  content: string
) => {
  const { data: user } = await supabase.auth.getUser();
  const userId = user.user?.id;

  const { error } = await supabase
    .from('chatbot_interactions')
    .insert([
      {
        session_id: sessionId,
        user_id: userId,
        role,
        content,
      },
    ]);

  if (error) {
    console.error('Error saving interaction:', error);
  }
};