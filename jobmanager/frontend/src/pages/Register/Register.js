import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RegisterUser } from '../../components/Forms/RegisterUser';

export const Register = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return isAuthenticated ? <Redirect to="/posts" /> : <RegisterUser />
}