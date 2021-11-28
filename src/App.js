import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [task, setTask] = useState()
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
    let target = e.target.parentNode
    const index = Number(target.id);
    console.log(index);
    let list = [...todoList];
    let newList = list.filter((e) => e.id !== index);
    setTodoList(newList);
    console.log(todoList);
  };
  const handleChange = (e)=> {
    let length = todoList.length + 1
    const task = {
      [e.target.name]: e.target.value,
      completed: false,
      id: length
    }
    setTask(task)
  }
 const handleAdd = (e)=>{
  let input = document.querySelector('.add-task')
   if (input.value === '') {
     e.preventDefault()
     console.log('ingrese tarea')
   }else{
   e.preventDefault()
  setTodoList([...todoList, task])
  input.value = ''
  setTask()
  }}
  const btnAction=()=>{
    document.querySelector('.btn-add').classList.add('btn-add-selected')
    setTimeout(() => {
      document.querySelector('.btn-add').classList.remove('btn-add-selected')
    }, 100);
  }
  const handleClean =()=>{
    setTodoList(todoList.filter((todo)=>todo.completed === false))
  }
   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) =>setTodoList(json.filter(e=> e.id < 21)))
  }, [setTodoList]); 
  useEffect(() => {
    todoList.length !== 0 ? checkTodo() : checkTodo();
  }, [todoList.length]);

  return (
    <div className="App">
      <h1>ToDo-app</h1>
      <Router>
        <NavBar />
        <div>
          <form>
            <input
              className='add-task' 
              type='text' 
              name='title' 
              onChange={handleChange}>
            </input>
            <button
              onClick={handleAdd} 
              onMouseDown={btnAction}
              className='btn-add'
            >add</button>
          </form>
          <button className='btn-clean' onClick= {handleClean}>clean fullfileds</button>
        </div>
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
