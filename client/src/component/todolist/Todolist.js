import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import { fetchTodo } from '../../action/TodoList'
import todolist from '../../api/todolist'


const Todolist = (props) => {
    const { items, username, fetchTodo } = props
    //console.log(items[items.length - 1])
    useEffect(() => {
        fetchTodo(username)
    }, []);

    useEffect(() => {
        const data = items[items.length - 1];
        //console.log(data)
        todolist.addTodolists(data)
    }, [items])

    return (
        <section className="main">
            <input className="toggle-all" />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {items[0] !== undefined && items.map(item =>
                    <li key={item.id} ><Todo todo={item} /></li>
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
    fetchTodo
}


export default connect(mapStateToProps, mapDispatchtoProps)(Todolist)
