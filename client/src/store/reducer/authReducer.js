import * as type from '../../action/ActionTypes'

const initialState = {
    isLoggedIn: false,
    message: "",
    token: "",
    username: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.USER_NOT_EXIST:
            return {
                ...state,
                isLoggedIn: false,
                message: action.payload
            }
        case type.LOGGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                message: "Logged in success",
                token: action.payload.token,
                username: action.payload.username
            }
        case type.LOGGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                message: action.payload
            }
        default: return state
    }

}

export default authReducer
