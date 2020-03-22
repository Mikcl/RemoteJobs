import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getJobs } from '../../actions/jobs';
import { Dashboard } from '../../components/layout/Dashboard';
import { Job } from '../../components/Job';

import NoData from '../../assets/images/no_data.svg';
import './Home.css';

export const Home = () => {

    const jobs = useSelector(state => state.jobs.jobs);

    const dispatch = useDispatch();
    const headings = ["Job Type", "Company", "Date Posted"];

    useEffect(() => {
        dispatch(getJobs())
    }, [])

    return (
        <>
            <div className="jobs">
                <h2> Jobs  </h2>
            </div>
            {(jobs && jobs.length) ?
                <Dashboard headings={headings}>
                    <>
                        {jobs.map(job => <Job key={job.id} job={job} applicationMode={true} />)}
                    </>
                </Dashboard>
                :
                <div className="noJobs">
                    <img className="noJobsImage" src={NoData} alt="no jobs" />
                    <h1>Waiting for job posts</h1>
                </div>
            }
        </>
    );
}
