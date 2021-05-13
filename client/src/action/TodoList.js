import * as type from './ActionTypes'

const addTodolist = (text) => {
    return {
        type: type.ADD_TODO,
        payload: {
            id: new Date().valueOf(),
            text,
            complete: false
        }

    }
}

export const addTodo = (text) => (dispatch) => {
    dispatch(addTodolist(text))
}




