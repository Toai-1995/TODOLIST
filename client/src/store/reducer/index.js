import { combineReducers } from 'redux'

import authReducer from './authReducer'
import todolistReducer from './todolistReducer'

const reducer = combineReducers({
    auth: authReducer,
    todolist: todolistReducer
})

export default reducer