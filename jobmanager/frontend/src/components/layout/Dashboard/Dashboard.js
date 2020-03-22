import React from 'react'
import PropTypes from 'prop-types';

import './Dashboard.css'

export const Dashboard = (DashboardProps) => {

    const { children, headings } = DashboardProps;

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        {headings.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}

Dashboard.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.element.isRequired
}