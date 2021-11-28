import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({ todo, handleCheck, handleDelete }) => {
  const [checked, setChecked] = useState(todo.completed);
  useEffect(() => {
    setChecked(todo.completed);
    checked
      ? document.getElementById(todo.id).classList.add("checked")
      : document.getElementById(todo.id).classList.remove("checked");
  });
  const animation = (e)=>{
    e.target.classList.add('delete-icon')
  }
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
          <FaTrashAlt 
              size={18}
              color='red' 
              id={todo.id} 
              onClick={handleDelete}
              onMouseDown={animation}
              /> 
      )}
    </div>
  );
};

export default Todo;
