import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Todo = ({ todo, handleCheck, handleDelete }) => {
  const [checked, setChecked] = useState(todo.completed);
  useEffect(() => {
    setChecked(todo.completed);
    checked
      ? document.getElementById(todo.id).classList.add("checked")
      : document.getElementById(todo.id).classList.remove("checked");
  });
  return (
    <div className="todo-row" id={todo.id}>
      <div className="sub">
        <input
          className="todo"
          type="checkbox"
          id={todo.id}
          checked={checked}
          onChange={handleCheck}
        />
        <span className="todo">{todo.id}</span>
        <p className="todo">{todo.title}</p>
      </div>
      {checked && (
        <button className="btn" id={todo.id} onClick={handleDelete}>
          -
        </button>
      )}
    </div>
  );
};

export default Todo;
