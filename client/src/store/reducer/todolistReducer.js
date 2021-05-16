import * as type from '../../action/ActionTypes'

const initialState = {
    items: []
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

        default: return state
    }

}

export default todolistReducer
