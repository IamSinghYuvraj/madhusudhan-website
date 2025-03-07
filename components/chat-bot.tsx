import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const sessionId = "someSessionId"; // Replace with actual session logic

  const saveInteraction = (
    sessionId: string,
    role: "user" | "assistant",
    content: string
  ) => {
    console.log(`Saving interaction: ${sessionId} - ${role}: ${content}`);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: input.trim() }]);
    setInput("");
    setIsLoading(true);
    setError(null);

    saveInteraction(sessionId, "user", input.trim());

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", isLoading: true },
    ]);

    try {
      const payload = {
        input_value: input.trim(),
        output_type: "chat",
        input_type: "chat",
      };
      console.log("Request payload:", payload);

      const response = await fetch("/api/proxy/route.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        let errorMessage = `Request failed with status ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          console.error("Error parsing JSON response:", e);
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("API response:", data);

      const assistantMessage =
        data?.outputs?.[0]?.outputs?.[0]?.artifacts?.message || "No response.";
      console.log("Assistant message:", assistantMessage);

      setMessages((prev) =>
        prev
          .filter((msg) => !msg.isLoading)
          .concat({
            role: "assistant",
            content: assistantMessage,
          })
      );

      saveInteraction(sessionId, "assistant", assistantMessage);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = (error as Error).message;
      setError(errorMessage);
      setMessages((prev) =>
        prev
          .filter((msg) => !msg.isLoading)
          .concat({
            role: "assistant",
            content: `Error: ${errorMessage}. Please try again.`,
          })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.isLoading ? "Thinking..." : msg.content}
          </div>
        ))}
      </div>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
