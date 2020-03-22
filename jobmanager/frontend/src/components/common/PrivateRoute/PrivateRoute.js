import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

const render = (auth, children) => {
    if (auth.isLoading) {
        return <p>loading...</p>
    } else if (!auth.isAuthenticated) {
        return <Redirect to="/register" />
    } else {
        return children
    }
}

export const PrivateRoute = (PrivateRouteProps) => {
    const { children, ...rest } = PrivateRouteProps

    const auth = useSelector(state => state.auth)

    return (
        <Route {...rest}>
            {render(auth, children)}
        </Route>
    )
}