import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { JobExpansion } from './JobExpansion/JobExpansion';
import './Job.css';

const formatDate = (date) => {
    return date.split("T")[0];
}

export const Job = (JobProps) => {
    const { job, applicationMode } = JobProps;
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <>
            <tr className={"hover"} onClick={toggleExpanded}>
                <td> {job.name} </td>
                <td> {job.company} </td>
                <td> {formatDate(job.created_at)} </td>
            </tr>
            {expanded && <JobExpansion job={job} applicationMode={applicationMode} />}
        </>
    );
}

Job.propTypes = {
    job: PropTypes.object.isRequired,
    applicationMode: PropTypes.bool.isRequired
}