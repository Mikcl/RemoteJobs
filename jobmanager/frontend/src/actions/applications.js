import axios from 'axios';

import { ADD_APPLICATION, GET_APPLICATIONS } from './types';
import { returnMessage } from '../reducers/messages'

// get application for a given job
export const getApplications = (job) => (dispatch) => {
    const application = { job }

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: application
    };

    axios.get("/api/applications/", config)
        .then(res => {
            dispatch({
                type: GET_APPLICATIONS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnMessage(err.response.data, err.response.status))
        );
};

export const applyJob = (application) => (dispatch) => {
    const { name, email, file, job } = application

    const applicationForm = new FormData()
    applicationForm.append('name', name)
    applicationForm.append('email', email)
    applicationForm.append('file', file)
    applicationForm.append('job', job)

    axios.post(`/api/applications/`, applicationForm, {
        headers: {
            'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary' //7MA4YWxkTrZu0gW
        }
    }
    ).then((res) => {
        dispatch({
            type: ADD_APPLICATION,
            payload: res.data
        });
        dispatch(returnMessage({ "Applied": "Good luck!" }, res.status))
    }).catch((err) => {
        dispatch(
            returnMessage(
                err.response.data, err.response.status
            )
        )
    });
};