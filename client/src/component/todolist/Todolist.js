import React from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'


const Todolist = (props) => {
    const { items } = props
    //console.log('items', items)
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

const mapStateToProps = ({ todolist }) => {
    return {
        items: todolist.items
    }
}

export default connect(mapStateToProps)(Todolist)
