import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
  ]);
  const [text, setText] = useState("");

  const addTask = () => {
    const t = text.trim();
    if (!t) return;
    setTasks(prev => [...prev, t]);
    setText("");
  };

  const removeTask = (idx) => {
    setTasks(prev => prev.filter((_, i) => i !== idx));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  const plural = tasks.length === 1 ? "item" : "item";

  return (
    <div className="page">
      <h1 className="title">todos</h1>

      <div className="card">
        {/* Input row */}
        <div className="input-row">
          <input
            className="new-task"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="New task"
          />
          <button className="add-btn" onClick={addTask} aria-label="Add task">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        {/* List */}
        <ul className="list">
          {tasks.length === 0 ? (
            <li className="empty">No tasks, add a task</li>
          ) : (
            tasks.map((task, i) => (
              <li key={i} className="todo-item">
                <span className="text">{task}</span>
                <button
                  className="delete"
                  onClick={() => removeTask(i)}
                  aria-label={`Delete ${task}`}
                  title="Delete"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Footer count */}
        <div className="footer">
          {tasks.length} {plural} left
        </div>

        {/* subtle stacked edges */}
        <div className="stack stack-1"></div>
        <div className="stack stack-2"></div>
      </div>
    </div>
  );
}
