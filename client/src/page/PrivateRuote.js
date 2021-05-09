import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRuote = ({ children, isLoggedIn, ...rest }) => {
    console.log(isLoggedIn)
    return (
        <Route
            {...rest}
            render={() => {
                return isLoggedIn
                    ? (children)
                    : (
                        <Redirect to={{ pathname: "/login" }} />
                    )
            }}
        ></Route>
    )
}

const mapStatetoProp = ({ auth }) => {
    return {
        isLoggedIn: auth.isLoggedIn
    }
}

export default connect(mapStatetoProp)(PrivateRuote)
