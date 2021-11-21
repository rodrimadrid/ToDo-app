import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [unCompleted, setUnCompleted] = useState([]);

  const checkTodo = () => {
    let completed = todoList.filter((todo) => todo.completed === true);
    let unCompleted = todoList.filter((todo) => todo.completed === false);
    setCompleted(completed);
    setUnCompleted(unCompleted);
  };
  const handleCheck = (e) => {
    const index = Number(e.target.id);
    let list = [...todoList];
    list = list.map((e) => {
      if (index === e.id) {
        e.completed ? (e.completed = false) : (e.completed = true);
      }
      return e;
    });
    setTodoList(list);
    checkTodo();
  };
  const handleDelete = (e) => {
    const index = Number(e.target.id);
    console.log(index);
    let list = [...todoList];
    let newList = list.filter((e) => e.id !== index);
    setTodoList(newList);
    console.log(todoList);
  };
  useEffect(() => {
    if (todoList.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setTodoList(json));
    }
  }, [setTodoList, setUnCompleted]);
  useEffect(() => {
    todoList.length !== 0 ? checkTodo() : checkTodo();
  }, [todoList.length]);

  return (
    <div className="App">
      <h1>ToDo-app</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/list"
            element={
              <TodoList
                todoList={todoList}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route
            path="/unchecked"
            element={
              <TodoList todoList={unCompleted} handleCheck={handleCheck} />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/checked"
            element={
              <TodoList
                todoList={completed}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
