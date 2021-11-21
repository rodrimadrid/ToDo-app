import React from "react";
import Todo from "./Todo";
const TodoList = ({ todoList, handleCheck, handleDelete }) => {
  return (
    <div className="todo-list">
      <div>
        {todoList &&
          todoList.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
