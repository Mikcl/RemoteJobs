import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserLogin } from '../../components/Forms/UserLogin';

export const Login = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return isAuthenticated ? <Redirect to="/posts" /> : <UserLogin />
}