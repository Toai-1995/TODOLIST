import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../action/TodoList'

function Header(props) {
    const { addTodo } = props
    // const addTodo = (text) => {
    //     store.dispatch({
    //         type: type.ADD_TODO,
    //         payload: {
    //             id: new Date().valueOf(),
    //             text,
    //             complete: false
    //         }
    //     });
    //     setText('')
    // }
    const onAddTodo = (e) => {
        if (e.key === "Enter" && text) {
            addTodo(text)
            setText('')
        }
    }

    const [text, setText] = useState('')
    return (
        <div>
            <header className="header">
                <h1>Todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={onAddTodo}
                />
            </header>
        </div>
    )
}

const mapActionToProps = {
    addTodo
}



export default connect(null, mapActionToProps)(Header)
