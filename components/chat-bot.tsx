// chatbot.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Bot, Send, X, Maximize2, Minimize2 } from "lucide-react";
import { saveInteraction } from "@/lib/saveInteraction";

interface Message {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [sessionId, setSessionId] = useState<string>(() => crypto.randomUUID());

  // Add a welcome message when the component mounts
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content:
          "Welcome to Madhusudan Aqua Industries AI Assistant! How can I help you today?",
      },
    ]);
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add the user's message to the chat
    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    // Save the user's message to Supabase (non-blocking)
    saveInteraction(sessionId, "user", input.trim());

    // Add a loading message for the assistant
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "", isLoading: true },
    ]);

    try {
      console.log("Sending message to API...");

      // Prepare the payload for the API request
      const payload = {
        input_value: input.trim(),
        output_type: "chat",
        input_type: "chat",
        tweaks: {
          "ChatInput-9zguD": {},
          "ParseData-lMHmZ": {},
          "Prompt-2U6mC": {},
          "SplitText-LuLzO": {},
          "ChatOutput-eN6uf": {},
          "OpenAIEmbeddings-Iy7Z4": {},
          "OpenAIEmbeddings-b8kaf": {},
          "File-GCZvw": {},
          "OpenAIModel-jfaj1": {},
          "AstraDB-Y1UtY": {},
          "AstraDB-ySAeC": {},
        },
      };
      console.log("Request payload:", payload);

      // Make the API call to the proxy endpoint
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      // Handle non-OK responses
      if (!response.ok) {
        // Clone the response to read it twice
        const errorResponse = response.clone();
        let errorMessage = `Request failed with status ${response.status}`;

        try {
          // Try to parse the error as JSON first
          const errorData = await errorResponse.json();
          errorMessage = errorData.error || errorData.message || errorMessage;
        } catch {
          // If parsing JSON fails, try to get the text
          try {
            const errorText = await errorResponse.text();
            if (errorText) errorMessage = errorText;
          } catch (e) {
            console.error("Could not read error response:", e);
          }
        }

        throw new Error(errorMessage);
      }

      // Parse the JSON response
      const data = await response.json();
      console.log("API response:", data);

      // Extract the assistant's message from the response
      const assistantMessage =
        data?.outputs?.[0]?.outputs?.[0]?.artifacts?.message ||
        "No response from the assistant.";
      console.log("Assistant message:", assistantMessage);

      // Remove the loading message and add the assistant's response
      setMessages((prev) =>
        prev
          .filter((msg) => !msg.isLoading)
          .concat({
            role: "assistant",
            content: assistantMessage,
          })
      );

      // Save the assistant's message to Supabase (non-blocking)
      saveInteraction(sessionId, "assistant", assistantMessage);
    } catch (error) {
      console.error("Chat error:", error);
      setError((error as Error).message);

      // Remove the loading message and add an error message
      setMessages((prev) =>
        prev
          .filter((msg) => !msg.isLoading)
          .concat({
            role: "assistant",
            content: `Error: ${(error as Error).message}. Please try again.`,
          })
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Focus the input field when the chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <div className="absolute -top-12 left-10">
          <span className="block text-center text-sm font-medium text-white bg-indigo-900 px-4 py-2 rounded-full animate-bounce opacity-90 whitespace-nowrap">
            Ask me anything
          </span>
        </div>
        <button
          onClick={toggleChatbot}
          className="group relative p-4 rounded-full shadow-lg bg-indigo-900 hover:bg-indigo-800 text-white transition-all duration-300 flex items-center justify-center"
          aria-label="Open chat"
        >
          <span className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-30 animate-ping"></span>
          <span className="absolute inset-0 rounded-full border-4 border-indigo-400 opacity-0 group-hover:opacity-100 animate-pulse"></span>
          <Bot className="h-6 w-6" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`fixed bottom-4 left-4 ${
        isMaximized
          ? "w-[90vw] h-[80vh] md:w-[600px] md:h-[700px]"
          : "w-[90vw] h-[500px] md:w-[400px] md:h-[500px]"
      } rounded-lg shadow-xl overflow-hidden transition-all duration-300 z-50 flex flex-col`}
    >
      <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-95 backdrop-blur-lg z-0"></div>
      <div className="relative z-10 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-indigo-900 text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <h2 className="font-semibold">AI Assistant</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={toggleMaximize}
            className="p-1 rounded-md hover:bg-indigo-800 transition-colors"
            aria-label={isMaximized ? "Minimize chat" : "Maximize chat"}
          >
            {isMaximized ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={toggleChatbot}
            className="p-1 rounded-md hover:bg-indigo-800 transition-colors"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="relative z-10 flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.isLoading ? (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "user"
                      ? "bg-indigo-900 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <p className="text-sm break-words whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form
        onSubmit={handleSendMessage}
        className="relative z-10 p-4 border-t border-gray-200 dark:border-gray-700 flex gap-2 bg-gray-50 dark:bg-gray-800"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          disabled={isLoading}
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className={`p-2 rounded-full ${
            !input.trim() || isLoading
              ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
              : "bg-indigo-900 hover:bg-indigo-800 text-white"
          } transition-colors`}
          aria-label="Send message"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Bot, X, RefreshCw, Maximize2, Minimize2 } from "lucide-react";
// import { saveInteraction } from "@/lib/saveInteraction";

// export function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMaximized, setIsMaximized] = useState(false);
//   const [sessionId, setSessionId] = useState<string>(() => crypto.randomUUID());
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   // Track whether a welcome message has been saved
//   const welcomeMessageSaved = useRef(false);

//   // This function directly communicates with Botpress
//   const initializeBotpress = () => {
//     if (!iframeRef.current) return;

//     // Save the initial welcome message when the chat opens
//     if (!welcomeMessageSaved.current) {
//       saveInteraction(
//         sessionId,
//         "assistant",
//         "Welcome to Madhusudan Aqua Industries AI Assistant! How can I help you today?"
//       );
//       welcomeMessageSaved.current = true;
//     }

//     // Set up message interceptor
//     const handleMessage = (event: MessageEvent) => {
//       // Only process messages that might be from Botpress
//       if (!event.data || typeof event.data !== "object") return;

//       try {
//         // Check for Botpress message event
//         if (event.data.type === "message") {
//           // Check if it's a user message
//           if (
//             event.data.message &&
//             event.data.message.type === "text" &&
//             event.data.message.source === "user"
//           ) {
//             console.log("User message intercepted:", event.data.message.text);
//             saveInteraction(sessionId, "user", event.data.message.text);
//           }

//           // Check if it's a bot message
//           if (
//             event.data.message &&
//             event.data.message.type === "text" &&
//             event.data.message.source === "bot"
//           ) {
//             console.log("Bot message intercepted:", event.data.message.text);
//             saveInteraction(sessionId, "assistant", event.data.message.text);
//           }
//         }
//       } catch (err) {
//         console.error("Error processing Botpress message:", err);
//       }
//     };

//     // Add the event listener
//     window.addEventListener("message", handleMessage);

//     // Return cleanup function
//     return () => {
//       window.removeEventListener("message", handleMessage);
//     };
//   };

//   useEffect(() => {
//     if (!isOpen) return;

//     // Initialize Botpress message handling
//     const cleanup = initializeBotpress();

//     // Force message save if direct interception doesn't work
//     const messageCheckInterval = setInterval(() => {
//       if (iframeRef.current && iframeRef.current.contentWindow) {
//         try {
//           // Try to directly access iframe content if possible
//           const iframeDoc = iframeRef.current.contentWindow.document;

//           // Look for message bubbles and save them if they're new
//           const userMessages = iframeDoc.querySelectorAll(
//             ".bpw-from-user .bpw-chat-bubble"
//           );
//           const botMessages = iframeDoc.querySelectorAll(
//             ".bpw-from-bot .bpw-chat-bubble"
//           );

//           // Process user messages
//           userMessages.forEach((msg) => {
//             const msgText = msg.textContent;
//             const msgId = msg.getAttribute("data-processed");

//             if (msgText && !msgId) {
//               saveInteraction(sessionId, "user", msgText);
//               msg.setAttribute("data-processed", "true");
//             }
//           });

//           // Process bot messages
//           botMessages.forEach((msg) => {
//             const msgText = msg.textContent;
//             const msgId = msg.getAttribute("data-processed");

//             if (msgText && !msgId) {
//               saveInteraction(sessionId, "assistant", msgText);
//               msg.setAttribute("data-processed", "true");
//             }
//           });
//         } catch (err) {
//           // Security restrictions might prevent direct access
//           console.log(
//             "Cannot directly access iframe content due to security restrictions"
//           );
//         }
//       }
//     }, 1000);

//     return () => {
//       if (cleanup) cleanup();
//       clearInterval(messageCheckInterval);
//     };
//   }, [isOpen, sessionId]);

//   const toggleChatbot = () => {
//     setIsOpen((prev) => !prev);
//   };

//   const toggleMaximize = () => {
//     setIsMaximized((prev) => !prev);
//   };

//   const handleRestart = () => {
//     // Save restart event
//     saveInteraction(
//       sessionId,
//       "assistant",
//       "Conversation was restarted by the user."
//     );

//     // Generate new session ID
//     const newSessionId = crypto.randomUUID();
//     setSessionId(newSessionId);
//     welcomeMessageSaved.current = false;

//     // Reset Botpress by reloading the iframe
//     if (iframeRef.current) {
//       const src = iframeRef.current.src;
//       iframeRef.current.src = "";
//       setTimeout(() => {
//         if (iframeRef.current) {
//           iframeRef.current.src = src;

//           // Save welcome message for new session
//           setTimeout(() => {
//             saveInteraction(
//               newSessionId,
//               "assistant",
//               "Welcome to Madhusudan Aqua Industries AI Assistant! How can I help you today?"
//             );
//             welcomeMessageSaved.current = true;
//           }, 1500);
//         }
//       }, 100);
//     }
//   };

//   if (!isOpen) {
//     return (
//       <div className="fixed bottom-6 left-6 z-50">
//         <div className="absolute -top-12 left-10">
//           <span className="block text-center text-sm font-medium text-white bg-indigo-900 px-4 py-2 rounded-full animate-bounce opacity-90 whitespace-nowrap">
//             Ask me anything
//           </span>
//         </div>
//         <button
//           onClick={toggleChatbot}
//           className="group relative p-4 rounded-full shadow-lg bg-indigo-900 hover:bg-indigo-800 text-white transition-all duration-300 flex items-center justify-center"
//           aria-label="Open chat"
//         >
//           <span className="absolute inset-0 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-30 animate-ping"></span>
//           <span className="absolute inset-0 rounded-full border-4 border-indigo-400 opacity-0 group-hover:opacity-100 animate-pulse"></span>
//           <Bot className="h-6 w-6" />
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div
//       className={`fixed bottom-4 left-4 ${
//         isMaximized
//           ? "w-[90vw] h-[80vh] md:w-[600px] md:h-[700px]"
//           : "w-[90vw] h-[500px] md:w-[400px] md:h-[500px]"
//       } rounded-lg shadow-xl overflow-hidden transition-all duration-300 z-50 flex flex-col`}
//     >
//       <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-95 backdrop-blur-lg z-0"></div>
//       <div className="relative z-10 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-indigo-900 text-white">
//         <div className="flex items-center gap-2">
//           <Bot className="h-5 w-5" />
//           <h2 className="font-semibold">AI Assistant</h2>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={handleRestart}
//             className="p-1 rounded-md hover:bg-indigo-800 transition-colors"
//             aria-label="Restart conversation"
//             title="Restart conversation"
//           >
//             <RefreshCw className="h-4 w-4" />
//           </button>
//           <button
//             onClick={toggleMaximize}
//             className="p-1 rounded-md hover:bg-indigo-800 transition-colors"
//             aria-label={isMaximized ? "Minimize chat" : "Maximize chat"}
//           >
//             {isMaximized ? (
//               <Minimize2 className="h-4 w-4" />
//             ) : (
//               <Maximize2 className="h-4 w-4" />
//             )}
//           </button>
//           <button
//             onClick={toggleChatbot}
//             className="p-1 rounded-md hover:bg-indigo-800 transition-colors"
//             aria-label="Close chat"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>
//       </div>

//       {/* Botpress iframe */}
//       <iframe
//         ref={iframeRef}
//         src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/07/06/20250307064322-W2XNQLYT.json"
//         className="relative z-10 flex-1 w-full h-full border-none"
//       ></iframe>
//     </div>
//   );
// }
