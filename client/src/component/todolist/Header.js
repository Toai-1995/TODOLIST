import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../action/TodoList'

function Header(props) {
    const { addTodo, username } = props
    const onAddTodo = (e) => {
        if (e.key === "Enter" && text) {
            addTodo(text, username)
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

const mapStateToProps = ({ auth }) => {
    return {
        username: auth.username
    }
}




export default connect(mapStateToProps, mapActionToProps)(Header)
