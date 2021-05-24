import todolist from '../api/todolist'
import * as type from './ActionTypes'

const fetchTodolist = (data) => {
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

const editTodolist = (message) => {
    //console.log(index, item)
    return {
        type: type.EDIT_TODO,
        payload: {
            message
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

export const editTodo = (item) => (dispatch) => {
    todolist.editTodolists(item)
        .then((res) => {
            // const data = res
            console.log(res)
            dispatch(editTodolist(res.message))
        })
    //console.log(item)
    // dispatch(editTodolist(index, item))

}







