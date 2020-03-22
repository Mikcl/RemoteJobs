import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addJob } from '../../../actions/jobs';
import { FormGroup } from '../../layout/FormGroup';

import '../Forms.css';

export const AddJob = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState(""); // TODO - use from user
    const [description, setDescription] = useState("")

    const dispatch = useDispatch();

    const addNewJob = (job) => {
        dispatch(addJob(job));
    }

    const clearState = () => {
        setName("")
        setCompany("")
        setDescription("")
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const job = { name, company, description };
        addNewJob(job)
        clearState()
    }

    return (
        <>
            <h2>New Job Listing</h2>
            <form>
                <FormGroup label="Job Name"
                    type="text"
                    placeholder="Job Role"
                    currentValue={name}
                    callback={setName} />
                <FormGroup label="Company"
                    type="text"
                    placeholder="Company"
                    currentValue={company}
                    callback={setCompany} />
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control"
                        rows="2" placeholder="Key job responsibilities/requirements"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Job</button>
            </form>
        </>
    );
}