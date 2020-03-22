import React from 'react';
import { Link } from 'react-router-dom'

import Background from '../../assets/images/houses.svg';

import './Landing.css';

export const Landing = () => {
    return (
        <>
            <div className="Landing">
                <div >
                    <img className="background" src={Background} />
                </div>
                <div className="description">
                    <div className="introduction">
                        <h1 className="title" >
                            Find your next remote role by checking out <Link to='/jobs' className="link">Jobs</Link> or build your team by <Link to='/posts' className="link">Posting</Link> your roles for free.
                        </h1>

                    </div>
                </div>
            </div>
        </>
    )
}
