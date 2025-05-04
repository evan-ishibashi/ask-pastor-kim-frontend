// frontend/src/components/ChatWidget.tsx

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Welcome from "./Welcome";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const MAX_ROWS = 5; // Max rows before scrolling
const MIN_ROWS = 1; // Minimum rows (starting height)

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstRender,setFirstRender] = useState<Boolean>(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  //Handles Text Area Sizing
  useEffect(()=>{
    if (textareaRef.current) textareaRef.current.focus()
  },[messages])

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to auto to allow it to resize freely
      textarea.style.height = "auto";

      // Set the height based on scrollHeight, but do not exceed max-height
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10);
      const maxHeight = lineHeight * MAX_ROWS;

      // Set the height, but restrict it with max-height for scroll
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (firstRender) setFirstRender(false)

    const userMessage: Message = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8001/ask", { question: input });
      const botMessage: Message = { sender: "bot", text: response.data.answer };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const errorMsg: Message = { sender: "bot", text: "Sorry, something went wrong." };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg bg-white h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {firstRender && <Welcome/>}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-xl max-w-fit ${
              msg.sender === "user" ? "bg-blue-100 justify-self-end" : "bg-gray-100 justify-self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-gray-400 text-sm">Thinking...</div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <textarea
          className="flex-1 border rounded px-3 py-2 resize-none overflow-y-auto max-h-[5rem]"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Prevent newline
              handleSubmit(e);
            }
          }}
          rows={MIN_ROWS}
          disabled={loading}
          ref={textareaRef}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 h-10 place-self-end"
          type="submit"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  );
}