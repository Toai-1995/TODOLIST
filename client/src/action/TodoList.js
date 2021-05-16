import todolist from '../api/todolist'
import * as type from './ActionTypes'

export const fetchTodolist = (data) => {
    return {
        type: type.FETCH_TODO,
        payload: data
    }
}

const addTodolist = (text, username) => {
    return {
        type: type.ADD_TODO,
        payload: {
            id: new Date().valueOf(),
            todolist: text,
            complete: false,
            username
        }

    }
}

export const fetchTodo = (username) => (dispatch) => {
    todolist.fetchTodolists(username)
        .then((res) => {
            const data = res;
            //console.log(data)
            dispatch(fetchTodolist(data))
        })
}

export const addTodo = (text, username) => (dispatch) => {
    dispatch(addTodolist(text, username))
    //console.log(text)
}







