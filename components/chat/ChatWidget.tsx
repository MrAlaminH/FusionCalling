"use client";
import { useState, useRef, useEffect } from "react";
import { BotMessageSquare } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface QuickMessage {
  id: string;
  text: string;
}

const WEBHOOK_URL =
  "https://n8n.deployify.xyz/webhook/beb4b78f-1ffd-4411-b489-3ff9989b7169/chat";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi there! 👋" },
    { sender: "bot", text: "How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState("");

  // Predefined quick messages
  const quickMessages: QuickMessage[] = [
    { id: "get-started", text: "I'd like to get started" },
    { id: "learn-more", text: "Tell me more about Fusion Calling" },
  ];

  // Generate a session ID on component mount
  useEffect(() => {
    if (!sessionId) {
      setSessionId(
        `session-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
      );
    }
  }, [sessionId]);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  // Format bot messages to be more readable
  const formatBotMessage = (text: string): string => {
    // If text contains numbered list items (like "1.", "2.", etc.), preserve the formatting
    if (/\d+\.\s+/.test(text)) {
      return text;
    }

    // Split paragraphs and add spacing
    let formattedText = text.split(/\n\n|\n/).join("\n\n");

    // Add bullet points to lists that seem like lists but don't have proper formatting
    if (text.includes(", ") && !text.includes("\n") && text.length > 100) {
      const parts = text.split(": ");
      if (parts.length > 1) {
        const intro = parts[0] + ":";
        const items = parts[1].split(", ").map((item) => "• " + item.trim());
        formattedText = `${intro}\n\n${items.join("\n")}`;
      }
    }

    return formattedText;
  };

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;

    const userMsg = { sender: "user" as const, text: messageText };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Add the action parameter to the URL
      const url = `${WEBHOOK_URL}?action=sendMessage`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatInput: messageText,
          sessionId: sessionId,
        }),
      });

      const data = await res.json();
      console.log("Response from n8n:", data); // Debug log

      // Handle different possible response formats
      let reply = "";

      if (Array.isArray(data) && data.length > 0) {
        // Format: [{output: "message"}]
        if (data[0]?.output) {
          reply = data[0].output;
        }
      } else if (typeof data === "object") {
        // Format: {response: "message"}
        if (data.response) {
          reply = data.response;
        }
        // Format: {reply: "message"}
        else if (data.reply) {
          reply = data.reply;
        }
        // Format: {output: "message"}
        else if (data.output) {
          reply = data.output;
        }
      }

      // Remove any trailing newlines from the reply
      reply = reply.trim();

      // Format the reply for better readability
      const formattedReply = formatBotMessage(reply);

      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: formattedReply || "Sorry, I didn't get that." },
      ]);
    } catch (e) {
      console.error("Error sending message:", e);
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickMessage = (message: QuickMessage) => {
    sendMessage(message.text);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-brand-strong hover:bg-brand shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <BotMessageSquare size={32} color="white" />
        </button>
      )}
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-full h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border-2 border-brand-light animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-brand to-brand-light rounded-t-2xl border-b-2 border-brand-light">
            <div>
              <div className="text-lg font-bold text-white">Fusion Calling</div>
              <div className="text-xs text-white/90">
                How can we help you?
              </div>
            </div>
            <button
              className="text-white hover:text-brand-light text-2xl font-bold ml-2"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3 bg-brand/5"
            style={{ scrollbarWidth: "thin" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex mb-3 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow
                    ${
                      msg.sender === "user"
                        ? "bg-brand text-white rounded-br-none"
                        : "bg-white text-brand-strong border border-brand-light rounded-bl-none"
                    }
                  `}
                >
                  {msg.sender === "bot" ? (
                    <div className="whitespace-pre-line">{msg.text}</div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mb-2">
                <div className="bg-white border border-brand-light text-brand-strong px-4 py-2 rounded-xl rounded-bl-none text-sm shadow flex items-center gap-2">
                  <span className="animate-bounce">...</span>
                  <span className="text-xs text-brand-light">Typing</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Quick Message Buttons */}
          {messages.length <= 2 && (
            <div className="p-3 bg-brand/5 border-t border-brand/10 flex flex-wrap gap-2">
              {quickMessages.map((qm) => (
                <button
                  key={qm.id}
                  className="bg-white hover:bg-brand/10 text-brand-strong text-sm rounded-full px-3 py-1.5 border border-brand-light transition flex-grow"
                  onClick={() => handleQuickMessage(qm)}
                >
                  {qm.text}
                </button>
              ))}
            </div>
          )}
          {/* Input */}
          <div className="p-4 bg-white border-t border-brand-light flex items-center gap-2">
            <input
              className="flex-1 rounded-lg border border-brand-light px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-light transition"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={loading}
            />
            <button
              className="bg-brand-strong hover:bg-brand text-white rounded-lg px-4 py-2 font-semibold transition disabled:opacity-50"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </div>
          {/* Footer */}
          <div className="text-center text-xs text-brand-light py-2 bg-brand/5 rounded-b-2xl border-t border-brand/10">
            Powered by Fusion Calling
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
