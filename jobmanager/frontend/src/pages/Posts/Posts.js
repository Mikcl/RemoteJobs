import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getJobs } from '../../actions/jobs';
import { Dashboard } from '../../components/layout/Dashboard';
import { Job } from '../../components/Job';
import { AddJob } from '../../components/Forms/AddJob';

import { ToggleContent, Modal } from '../../components/layout/Modal';
import { Button } from '../../components/layout/Button';

import NoData from '../../assets/images/no_data.svg';
import './Posts.css';

export const Posts = () => {

    const jobs = useSelector(state => state.jobs.jobs);
    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs())
    }, [])

    const ownedJobs = jobs.filter((job) => job.owner === user.id)

    const headings = ["Job Type", "Company", "Date Posted"];

    return (
        <>
            <div className="addPosts">
                <h2> Your Jobs </h2>
                <ToggleContent
                    toggle={show => <Button className="btn btn-primary" onClick={show}>Add New Job</Button>}
                    content={hide => (
                        <Modal hideCallback={() => hide()}>
                            <>
                                <AddJob />
                            </>
                        </Modal>
                    )}
                />
            </div>
            {(ownedJobs && ownedJobs.length) ?
                <Dashboard headings={headings}>
                    <>
                        {ownedJobs.map(job => <Job key={job.id} job={job} applicationMode={false} />)}
                    </>
                </Dashboard>
                :
                <div className="posts">
                    <img className="noPosts" src={NoData} alt="no posts" />
                    <h1>Add jobs to get started</h1>
                </div>
            }
        </>
    );
}
