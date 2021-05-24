import React, { useState } from 'react'

const Todo = (props) => {
    let { todo, todoEditingId, getTodoId, editTodo } = props
    const [text, setText] = useState(todo.todolist)
    //console.log(todo)
    const isEditing = todoEditingId === todo.id
    // console.log(`index: ${index}, isEditing: ${isEditing}`)
    return (
        <div className={`${isEditing ? 'editing' : ''}  ${todo.complete ? 'completed' : ''}`} >
            {isEditing ?
                (<input
                    className="edit "
                    type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            const newTodo = { ...todo, todolist: text }
                            editTodo(newTodo)
                        }
                    }}
                />) :
                (<div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        // checked={todo.complete}
                        onClick={() => { }}
                    />
                    <label
                        onDoubleClick={() => getTodoId(todo.id)}
                    >{todo.todolist}</label>
                    <button
                        className="destroy"
                    ></button>
                </div>)
            }
        </div>
    )
}




export default Todo
