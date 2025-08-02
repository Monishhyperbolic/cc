import React from "react";
import ChatBox from "./components/ChatBox";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{
      padding: "2rem",
      fontFamily: "Arial",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      alignItems: "center"
    }}>
      <TodoList />
      <ChatBox />
    </div>
  );
}
