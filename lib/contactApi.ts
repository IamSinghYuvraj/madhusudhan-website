import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  // Insert into Supabase
  const { error } = await supabase
    .from("contact_queries")
    .insert([formData]);

  if (error) {
    throw error;
  }

  // Send email
  const response = await fetch("/api/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return true;
}
