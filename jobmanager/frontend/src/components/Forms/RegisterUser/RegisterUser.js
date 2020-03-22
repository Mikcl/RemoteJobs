import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormGroup } from '../../layout/FormGroup';
import { register } from '../../../actions/auth';

import '../Forms.css';

export const RegisterUser = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const attemptRegistration = (username, email, password) => {
        dispatch(register({ username, email, password }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        attemptRegistration(username, email, password)
    }

    return (
        <div className="col-md-g m-auto">
            <div className="card card-body mt-5">
                <h2>Register</h2>
                <form>
                    <FormGroup label="Username"
                        type="text"
                        placeholder="Username"
                        currentValue={username}
                        callback={setUsername} />
                    <FormGroup label="Email"
                        type="email"
                        placeholder="Email"
                        currentValue={email}
                        callback={setEmail} />
                    <FormGroup label="Password"
                        type="password"
                        placeholder="Password"
                        currentValue={password}
                        callback={setPassword} />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                    <p>
                        <i>already registered? </i>
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}