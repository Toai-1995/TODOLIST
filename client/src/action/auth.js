import authen from '../api/authen'
import * as type from './ActionTypes'
// import store from '../store/store';

export const login = (user) => (dispatch) => {
    authen.login(user)
        .then((res) => {
            console.log("res: ", res);
            if (res.message === "User doesn't exist") {
                return dispatch({ type: type.USER_NOT_EXIST, payload: res.message })
            }
            if (res.message === "Username or password is not correct") {
                dispatch({ type: type.LOGGIN_FAIL, payload: res.message })
            }
            else {
                dispatch({
                    type: type.LOGGIN_SUCCESS, payload: { token: res.token, username: res.username }
                })
                localStorage.setItem("token", res.token);
            }

        })
        .catch((err) => {
            console.log(err)
            dispatch({ type: type.LOGGIN_FAIL })
        })
}