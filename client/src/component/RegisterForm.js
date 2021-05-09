import { useState } from 'react'
import authen from '../api/authen';
import { Link } from 'react-router-dom'

import './style.css'

const RegisterForm = () => {
    const onRegister = async (e) => {
        e.preventDefault();
        const data = await authen.register(user)
        console.log(data)
        if (data.message === "Resister success") {
            window.location = "/login"
        }
        if (data.message === "User name is exist") {
            setMessage(data.message)
        }

    }

    const [user, setUser] = useState({ username: "", password: "" })
    const [message, setMessage] = useState("")
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form onSubmit={onRegister}>
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
                    <p>{message}</p>
                    <input type="submit" className="fadeIn fourth" value="Register" />
                    <Link className="underlineHover" to="/login">Login</Link>
                </form>
            </div>
        </div>
    )
}


export default RegisterForm
