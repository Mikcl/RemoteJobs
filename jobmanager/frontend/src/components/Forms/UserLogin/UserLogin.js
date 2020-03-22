import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormGroup } from '../../layout/FormGroup';
import { login } from '../../../actions/auth';

import '../Forms.css';

export const UserLogin = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const attemptLogin = (username, password) => {
        dispatch(login(username, password));
    }

    const clearState = () => {
        setUsername("")
        setPassword("")
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        attemptLogin(username, password)
        clearState()
    }

    return (
        <div className="col-md-g m-auto">
            <div className="card card-body mt-5">
                <h2>Login</h2>
                <form>
                    <FormGroup label="Username"
                        type="text"
                        placeholder="Username"
                        currentValue={username}
                        callback={setUsername} />
                    <FormGroup label="Password"
                        type="password"
                        placeholder="Password"
                        currentValue={password}
                        callback={setPassword} />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                    <p>
                        <i>not registered? </i>
                        <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}