import { createClient } from "@supabase/supabase-js";

// Supabase Configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Saves a user or assistant interaction into Supabase.
 * @param {string} sessionId - The unique session ID for tracking conversations.
 * @param {"user" | "assistant" | "system"} role - The role of the message sender.
 * @param {string} content - The message content.
 */
export async function saveInteraction(
  sessionId: string,
  role: "user" | "assistant" | "system",
  content: string
) {
  try {
    const { error } = await supabase.from("interactions").insert([
      {
        session_id: sessionId,
        role,
        content,
        timestamp: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    console.log(`✅ Interaction saved: [${role}] ${content}`);
  } catch (error) {
    console.error("❌ Error saving interaction:", error);
  }
}

/**
 * Handles conversation restart by logging the event in Supabase.
 * @param {string} sessionId - The session ID of the conversation.
 */
export async function restartConversation(sessionId: string) {
  try {
    const { error } = await supabase.from("interactions").insert([
      {
        session_id: sessionId,
        role: "system",
        content: "User restarted the conversation.",
        timestamp: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    console.log("🔄 Conversation restarted and logged.");
  } catch (error) {
    console.error("❌ Error logging conversation restart:", error);
  }
}
