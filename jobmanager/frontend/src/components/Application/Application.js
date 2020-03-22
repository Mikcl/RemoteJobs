import React from 'react'
import PropTypes from 'prop-types';

const formatDate = (date) => {
    return date.split("T")[0];
}

export const Application = (ApplicationProps) => {
    const { application } = ApplicationProps
    const { name, email, file, created_at } = application
    return (
        <tr className={"hover"}>
            <td> {name} </td>
            <td> {email} </td>
            <td> {formatDate(created_at)} </td>
            <td> <a href={file} target="_blank">resume</a></td>
        </tr>
    )
}

Application.propTypes = {
    application: PropTypes.object.isRequired
}