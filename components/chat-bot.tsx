import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X } from "lucide-react"

interface Message {
  type: "user" | "bot"
  content: string
}

const initialMessages: Message[] = [
  {
    type: "bot",
    content: "Hello! I'm here to help you with any questions about our water treatment solutions. How can I assist you today?"
  }
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 10000) // Show popup after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSend = () => {
    if (!input.trim()) return

    const newMessages = [
      ...messages,
      { type: "user", content: input },
      { type: "bot", content: "Thank you for your message. One of our representatives will get back to you shortly." }
    ]
    
    setMessages(newMessages)
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {showPopup && !isOpen && (
        <div className="fixed bottom-20 right-4 animate-bounce z-50">
          <Card className="relative p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setShowPopup(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <p className="pr-6 text-sm">
              Need help with water treatment solutions? Chat with us now!
            </p>
          </Card>
        </div>
      )}

      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[350px] max-w-[90vw] shadow-lg z-50">
          <div className="flex h-[500px] flex-col">
            <div className="border-b p-4">
              <h2 className="font-semibold">Chat with Us</h2>
              <p className="text-sm text-muted-foreground">
                Ask us anything about our products
              </p>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      } max-w-[80%]`}
                    >
                      <p className="text-sm break-words">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Button size="icon" onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}