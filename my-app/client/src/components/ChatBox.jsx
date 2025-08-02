import React, { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  // Fallback URL if environment variable is not available
  const API_URL = window.REACT_APP_API_URL || "https://monishhyperbolic-cc-3001.app.github.dev/chat";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input.trim() };
    setChat((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post(
        API_URL,
        { message: input.trim() },
        { headers: { "Content-Type": "application/json" } }
      );

      setChat((prev) => [
        ...prev,
        { role: "assistant", content: res.data.reply },
      ]);
      setInput("");
    } catch (err) {
      console.error("Error sending message:", err.message);
      setChat((prev) => [
        ...prev,
        { role: "assistant", content: `❌ Error: ${err.message}` },
      ]);
      setInput("");
    }
  };

  return (
    <div
      style={{
        flex: 1,
        maxWidth: "600px",
        background: "white",
        borderRadius: "20px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(168, 85, 247, 0.15)",
        display: "flex",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.4rem", color: "#6b21a8" }}>🤖 AI Assistant</h2>
        <p style={{ color: "#888" }}>Ask me anything or get help with your tasks</p>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          marginBottom: "1rem",
          paddingRight: "0.5rem",
        }}
      >
        {chat.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                background: msg.role === "user" ? "#c084fc" : "#f3e8ff",
                color: msg.role === "user" ? "white" : "#4c1d95",
                padding: "10px 14px",
                borderRadius: "16px",
                maxWidth: "70%",
                fontSize: "0.95rem",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            fontSize: "1rem",
            outlineColor: "#a855f7",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            background: "#a855f7",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "0 16px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}