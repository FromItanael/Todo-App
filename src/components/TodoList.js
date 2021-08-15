import React from 'react'
import Todo from './Todo'
import './TodoList.css'

function TodoList({ todoList, setTodos, filteredTodos }) {

    return (
        <div className="todo__container">
            <ul className="todo__list">
                {filteredTodos.map(todo => (
                    <Todo key={todo.id} setTodos={setTodos} todoList={todoList} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
