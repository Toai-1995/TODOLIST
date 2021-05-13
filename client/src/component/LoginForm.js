import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../action/auth'
import './style.css'





export const LoginForm = (props) => {
    const onLogin = (e) => {
        e.preventDefault();
        props.login(user);
        console.log(props.isLoggedIn)
    }

    const [user, setUser] = useState({ username: "", password: "" })

    return (
        props.isLoggedIn
            ? (<Redirect to="/" />)
            : (
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <form onSubmit={onLogin}>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="UserName" required
                                onChange={(e) => {
                                    setUser({ ...user, username: e.target.value })
                                }}
                            />
                            <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" required
                                onChange={(e) => {
                                    setUser({ ...user, password: e.target.value })
                                }}
                            />
                            <p style={{ color: "red" }}>{props.message}</p>
                            <input type="submit" className="fadeIn fourth" value="Log In" />
                        </form>
                        <div id="formRegiste">
                            <Link className="underlineHover" to="/register">Register</Link>
                        </div>
                        <div id="formFooter">
                            <a className="underlineHover" href="facebook.com">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            )
    )
}

const mapStateToProps = ({ auth }) => {
    //console.log("state: ", auth)
    return {
        isLoggedIn: auth.isLoggedIn,
        message: auth.message,
        token: auth.token
    };
}

const mapActionToProps = {
    login
}


export default connect(mapStateToProps, mapActionToProps)(LoginForm)
