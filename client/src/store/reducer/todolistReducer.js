import * as type from '../../action/ActionTypes'

const initialState = {
    items: [],
    editTodo: {
        success: false,
        message: ""
    }
}



const todolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.FETCH_TODO:
            return {
                ...state,
                items: action.payload
            }
        case type.ADD_TODO:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case type.EDIT_TODO:
            return {
                ...state,
                editTodo: {
                    success: true,
                    message: action.payload.message
                }
            }
        default: return state
    }

}

export default todolistReducer
