import { useState, useEffect, useRef } from "react";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import Timer from "./components/Timer";
import "./index.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [activeTime, setActiveTime] = useState(0);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setActiveTime((time) => time + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <h1 className="chat-title">Мини-чат</h1>
        <Timer activeTime={activeTime} />
        <ChatWindow
          messages={messages}
          lastMessageRef={lastMessageRef}
        ></ChatWindow>
        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
