const initialState = {
    isLoggedIn: false,
    message: "",
    token: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_NOT_EXIST":
            return {
                ...state,
                isLoggedIn: false,
                message: action.payload
            }
        case "LOGGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                message: "Logged in success",
                token: action.payload
            }
        case "LOGGIN_FAIL":
            return {
                ...state,
                isLoggedIn: false,
                message: "Logged in fail "
            }
        default: return state
    }

}

export default authReducer
