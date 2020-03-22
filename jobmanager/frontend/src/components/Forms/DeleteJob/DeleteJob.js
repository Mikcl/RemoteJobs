import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteJob } from '../../../actions/jobs';
import { Button } from '../../layout/Button';

import './DeleteJob.css'

export const DeleteJob = (DeleteJobProps) => {

    const { job } = DeleteJobProps
    const { id } = job;

    const dispatch = useDispatch();

    const removeJob = () => {
        setDeleting(true);
        dispatch(deleteJob(id));
        setDeleting(false)
    }

    const [deleting, setDeleting] = useState(false)

    return (
        <>
            <div className="delete">
                <p><i>Do you want to delete this job?</i></p>
                <Button className="btn btn-danger" onClick={() => removeJob()}>
                    {deleting ? '...' : 'Delete'}
                </Button>
            </div>
        </>
    )
}

DeleteJob.propTypes = {
    job: PropTypes.object.isRequired,
}