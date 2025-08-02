import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Review quarterly reports", priority: "high", completed: false },
    { text: "Schedule team meeting", priority: "medium", completed: true },
    { text: "Update project documentation", priority: "low", completed: false },
  ]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task.trim(), priority: "low", completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const getPriorityStyle = (level) => {
    const colors = {
      high: "#ff4d4d",
      medium: "#a855f7",
      low: "#6366f1",
    };
    return {
      backgroundColor: colors[level],
      color: "white",
      borderRadius: "12px",
      padding: "4px 10px",
      fontSize: "0.75rem",
      fontWeight: 600
    };
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div style={{
      flex: 1,
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "1.5rem",
      boxShadow: "0 4px 12px rgba(168, 85, 247, 0.15)",
      maxWidth: "400px"
    }}>
      <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: "#6b21a8" }}>📋 Tasks</h2>
      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>{completedCount} of {tasks.length} completed</p>
      
      <div style={{ height: "8px", backgroundColor: "#eee", borderRadius: "6px", marginTop: "0.5rem", marginBottom: "1rem" }}>
        <div style={{
          width: `${(completedCount / tasks.length) * 100}%`,
          height: "100%",
          backgroundColor: "#c084fc",
          borderRadius: "6px"
        }}></div>
      </div>

      <div style={{ display: "flex", marginBottom: "1rem", gap: "0.5rem" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            outlineColor: "#a855f7",
            fontSize: "1rem"
          }}
        />
        <button onClick={addTask} style={{
          background: "#a855f7",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "0 16px",
          fontSize: "1.2rem",
          cursor: "pointer"
        }}>+</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {tasks.map((t, i) => (
          <li key={i} style={{
            background: "#faf5ff",
            padding: "0.75rem",
            borderRadius: "14px",
            marginBottom: "0.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input type="checkbox" checked={t.completed} onChange={() => toggleComplete(i)} />
              <span style={{
                textDecoration: t.completed ? "line-through" : "none",
                color: t.completed ? "#9ca3af" : "#4c1d95",
                fontWeight: "500"
              }}>{t.text}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={getPriorityStyle(t.priority)}>{t.priority}</span>
              <button onClick={() => removeTask(i)} style={{
                background: "none",
                border: "none",
                color: "#9333ea",
                fontSize: "1.1rem",
                cursor: "pointer"
              }}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
