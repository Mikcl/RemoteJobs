import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getApplications } from '../../../actions/applications';
import { DeleteJob } from '../../Forms/DeleteJob';
import { Application } from '../../Application';
import { Dashboard } from '../../layout/Dashboard/';

import NoData from '../../../assets/images/no_data.svg';
import './JobStatus.css';

export const JobStatus = (JobStatusProps) => {
    const { job } = JobStatusProps

    const applications = useSelector(state => state.applications.applications);
    const headings = ["Name", "Email", "Date Applied", "Resume"];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApplications(job.id))
    }, [])

    return (
        <div>
            <h2>{job.name} - {job.company}</h2>
            <div className="col-md-g m-auto">
                <div className="card card-body mt-5">
                    <h2>Applications</h2>
                    {(applications && applications.length) ?
                        <Dashboard headings={headings}>
                            <>
                                {applications.map(application => <Application key={application.id} application={application} />)}
                            </>
                        </Dashboard>
                        :
                        <div className="applications">
                            <img className="noApplicationsImage" src={NoData} alt="no applications" />
                            <h1>No Applicants Yet</h1>
                        </div>
                    }
                </div>
            </div>
            <DeleteJob job={job} />
        </div>
    )
}

JobStatus.propTypes = {
    job: PropTypes.object.isRequired
}
