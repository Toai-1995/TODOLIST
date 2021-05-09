import authen from '../api/authen'
// import store from '../store/store';

export const login = (user) => (dispatch) => {
    authen.login(user)
        .then((res) => {
            // console.log("res: ", res);
            if (res.message === "User doesn't exist") {
                dispatch({ type: "USER_NOT_EXIST", payload: res.message })
            }
            if (res.message === "Username or password is not correct") {
                dispatch({ type: "LOGGIN_FAIL" })
            }
            else {
                dispatch({
                    type: "LOGGIN_SUCCESS", payload: res.token
                })
                localStorage.setItem("token", res.token)
            }

        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: "LOGGIN_FAIL" })
        })
}