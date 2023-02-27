import React, { useState, useEffect } from "react";
import AddTodo from "./component/AddTodo/AddTodo";
import TodoList from "./component/TodoList";
import "./styles.css";

export default function TodoApp() {
  const [updated, setUpdated] = useState("");

  return (
    <div className="todo-app rounded-border">
      <h1>Todo List</h1>
      <AddTodo submitted={setUpdated} />
      <TodoList updated={updated} />
    </div>
  );
}
