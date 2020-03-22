import axios from 'axios';
import { returnMessage } from '../reducers/messages';

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    axios.get('/api/auth/user', configToken(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            // dispatch(returnMessage(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

export const login = (username, password) => (dispatch) => {

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body 
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
            dispatch(returnMessage({ "Welcome": res.data.user.username }, res.status))
        })
        .catch(err => {
            dispatch(returnMessage({ "Incorrect": "Login credentials" }, err.response.status))
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

export const register = (account) => (dispatch) => {

    const { username, email, password } = account;

    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body 
    const body = JSON.stringify({ username, email, password });

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            dispatch(returnMessage({ "Welcome": res.data.user.username }, res.status))
        })
        .catch(err => {
            dispatch(returnMessage(err.response.data, err.response.status))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const logout = () => (dispatch, getState) => {

    axios.post('/api/auth/logout/', null, configToken(getState))
        .then(() => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
            dispatch(returnMessage({ "Success": "Logged Out" }, 200))
        })
        .catch(err => {
            dispatch(returnMessage(err.response.data, error.response.status))
        })
}

export const configToken = (getState) => {

    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};