import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  const createTodo = e => {
    e.preventDefault()
    setTodos([
      ...todos, { id: Math.random() * 1000, text: input, completed: false }
    ])
    setInput("")
  }

  useEffect(() => {
    handleFilter()
    saveLocalTodos()
  }, [todos, status])

  return (
    <div className="App">
      <Header />
      <Form input={input}
        createTodo={createTodo}
        onChange={handleChange}
        setStatus={setStatus}
        handleFilter={handleFilter}
      />
      <TodoList setTodos={setTodos} todoList={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
