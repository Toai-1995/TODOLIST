import React from 'react'

const Todo = (props) => {
    const { todo } = props
    return (
        <>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                />
                <label>{todo.todolist}</label>
                <button
                    className="destroy"
                ></button>
            </div>
        </>
    )
}




export default Todo
