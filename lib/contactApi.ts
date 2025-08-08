// lib/contactApi.ts
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    // Send to API route which handles both email sending and database saving
    const response = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}