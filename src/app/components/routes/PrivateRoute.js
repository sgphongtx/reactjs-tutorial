import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { ACCESS_TOKEN } from 'app/const/App'
import { AUTH_LOGIN } from 'app/const/Routes'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    return <Route {...rest} render={props => (accessToken ? <Component {...props} /> : <Redirect to={AUTH_LOGIN} />)} />
}

export default PrivateRoute
