import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const AIMentor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI Recovery Mentor. I'm here to support you with empathy and understanding. How are you feeling today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Supportive CBT-style responses based on keywords
    if (lowerMessage.includes("craving") || lowerMessage.includes("urge")) {
      return "I hear you. Cravings are tough, but they're temporary. Try the 5-4-3-2-1 technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. This can help ground you in the present moment. You've got this. 💙";
    }
    if (lowerMessage.includes("anxious") || lowerMessage.includes("stressed")) {
      return "It's completely normal to feel anxious during recovery. Take a deep breath with me. In through your nose for 4 counts, hold for 4, out for 4. Remember, you're not alone in this journey. What's one small thing you can do right now to feel a bit calmer?";
    }
    if (lowerMessage.includes("proud") || lowerMessage.includes("progress")) {
      return "That's wonderful to hear! Celebrating your progress, no matter how small, is so important. You should be proud of yourself. Each step forward is a victory. Keep up the amazing work! 🌟";
    }
    if (lowerMessage.includes("relapse") || lowerMessage.includes("failed")) {
      return "First, I want you to know that relapse doesn't erase your progress. It's not failure—it's part of the journey for many people. What matters is that you're here right now, ready to keep going. Be kind to yourself. What brought you back today?";
    }
    if (lowerMessage.includes("lonely") || lowerMessage.includes("alone")) {
      return "Feeling lonely is hard, and I'm glad you reached out. You're part of a community of people who understand what you're going through. Have you considered sharing in our Community section? Sometimes connecting with others on similar journeys can help. You're not alone. ❤️";
    }
    
    // Default motivational response
    return "Thank you for sharing that with me. Recovery is a journey, and every day you choose to show up is a success. Remember, progress isn't always linear, and that's okay. What's one thing you're grateful for today?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        role: "assistant",
        content: generateResponse(input),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-subtle-gradient pb-20">
      <div className="container max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-calm-gradient flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">AI Recovery Mentor</h1>
              <p className="text-sm text-muted-foreground">Your supportive companion</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <Card className="h-[calc(100vh-280px)] overflow-y-auto mb-4 p-4 shadow-soft border-0">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === "user" ? "bg-secondary/20" : "bg-primary/20"
                }`}>
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-secondary" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-card border border-border"
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-60 mt-2">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                </div>
                <div className="bg-card border border-border p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </Card>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Share what's on your mind..."
            className="flex-1 border-border focus:border-primary"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-primary hover:bg-primary/90"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default AIMentor;
