import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/auth';

import './Header.css';

export const Header = () => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const dispatch = useDispatch();

    const attemptLogout = () => {
        dispatch(logout());
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        attemptLogout()
    }

    const guestLinks = () => {
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to='/jobs' className="nav-link brand ">Jobs</Link>
                </li>
                <li className="nav-item">
                    <Link to='/register' className="nav-link brand">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link brand">Login</Link>
                </li>
            </ul>
        );
    }

    const authLinks = () => {
        return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to='/jobs' className="nav-link brand">Jobs</Link>
                </li>
                <li className="nav-item">
                    <Link to='/posts' className="nav-link brand">Posts</Link>
                </li>
                <li className="nav-item">
                    <button className="nav-link brand btn btn-info btn-sm text-light" onClick={handleSubmit}>
                        Logout
                    </button>
                </li>
            </ul>
        );
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light custom">
                <div className="container navRow">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="name" href="#">working from home</a>
                    <div className="links">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            {isAuthenticated ? authLinks() : guestLinks()}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}