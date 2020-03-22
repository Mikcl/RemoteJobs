import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { FormGroup } from '../../layout/FormGroup';
import { FileUpload } from '../../layout/FileUpload';

import { applyJob } from '../../../actions/applications';

import '../Forms.css';

export const ApplyJob = (ApplyJobsProps) => {

    const dispatch = useDispatch();

    const { job: jobToApply } = ApplyJobsProps;
    const job = jobToApply.id

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const applicationForm = { name, email, file, job }
        dispatch(applyJob(applicationForm));
    }

    return (
        <>
            <h2>{jobToApply.name} - {jobToApply.company}</h2>
            <form>
                <FormGroup label="Name"
                    type="text"
                    placeholder="Full Name"
                    currentValue={name}
                    callback={setName} />
                <FormGroup label="Email"
                    type="email"
                    placeholder="Email"
                    currentValue={email}
                    callback={setEmail} />
                <FileUpload fileDesired={"Resume"} callback={setFile} />
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Apply</button>
            </form>
        </>
    );
}

ApplyJob.propTypes = {
    job: PropTypes.object.isRequired
}