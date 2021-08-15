import React from 'react'
import './Form.css'

function Form({ createTodo, onChange, input, setStatus }) {

    const handleChangeStatus = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <input value={input}
                onChange={onChange}
                type="text"
                className="todo__input"
            />
            <button onClick={createTodo} className="todo__button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={handleChangeStatus} name="todos" className="filter__todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
