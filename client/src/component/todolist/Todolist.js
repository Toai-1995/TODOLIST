import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import { fetchTodo, editTodo } from '../../action/TodoList'
import todolist from '../../api/todolist'


const Todolist = (props) => {
    const [todoId, setTodoId] = useState('')
    const { items, username, fetchTodo, editTodo } = props

    // console.log(items)

    useEffect(() => {
        fetchTodo(username)
    }, [fetchTodo, username]);

    useEffect(() => {
        const data = items[items.length - 1];
        //console.log(data)
        todolist.addTodolists(data)
    }, [items.length])

    const getTodoId = (id) => {
        setTodoId(id)
    }

    const onEditTodo = (item) => {
        editTodo(item)
        setTodoId('Toai')
        //  console.log(todoId)
        fetchTodo(username)
    }
    return (
        <section className="main">
            <input className="toggle-all" />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {items[0] !== undefined && items.map((item, index) =>
                    <li key={item.id} ><Todo
                        todo={item}
                        todoEditingId={todoId}
                        getTodoId={getTodoId}
                        editTodo={onEditTodo}
                        index={index}
                    /></li>
                )}
            </ul>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.todolist.items,
        username: state.auth.username
    }
}

const mapDispatchtoProps = {
    fetchTodo,
    editTodo
}


export default connect(mapStateToProps, mapDispatchtoProps)(Todolist)
