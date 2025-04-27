import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const Chatbot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (visible && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, visible]);
  const apiKey = process.env.REACT_APP_API_KEY; 

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
  
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,  // Use the environment variable here
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [{ role: "user", content: input }],
        }),
      });
      const data = await res.json();
      const botText = data.choices?.[0]?.message?.content || "No response.";
      const botMsg = { sender: "bot", text: botText };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: "bot", text: "Error: " + err.message }]);
    } finally {
      setLoading(false);
    }
  };
  

  if (!visible) return null;

  return (
    <div className="chatbot">
      <div className="chatbot-header">
      <span>Jiva AI Chat</span>
      <div style={{ fontSize: '0.8rem', color: '#444' }}>DeepSeekR1-Key-1</div>
      <button className="chatbot-close" onClick={onClose}>×</button>
    </div>
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender === "bot" ? "bot" : "user"}`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;