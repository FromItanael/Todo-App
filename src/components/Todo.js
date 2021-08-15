import React from 'react'
import './Todo.css'

function Todo({ todo, setTodos, todoList }) {

    const handleDeleteTodo = () => {
        setTodos(todoList.filter((el) => el.id !== todo.id))
    }
    const handleCompleteTodo = () => {
        setTodos(todoList.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className="todo">
            <li className={`todo__item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>

            <button onClick={handleCompleteTodo} className="complete__btn">
                {todo.completed ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i>}
            </button>
            <button onClick={handleDeleteTodo} className="trash__btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
