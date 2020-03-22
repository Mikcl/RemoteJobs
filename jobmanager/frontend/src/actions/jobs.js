import axios from 'axios';

import { ADD_JOB, GET_JOBS, DELETE_JOB } from './types';
import { returnMessage } from '../reducers/messages'
import { configToken } from './auth';

export const getJobs = () => dispatch => {
    axios.get('/api/jobs/')
        .then(res => {
            dispatch({
                type: GET_JOBS,
                payload: res.data
            });
        }).catch(err => dispatch(
            returnMessage(
                err.response.data, err.response.status
            )
        ));
};

export const deleteJob = (id) => (dispatch, getState) => {
    axios.delete(`/api/jobs/${id}/`, configToken(getState))
        .then(res => {
            dispatch({
                type: DELETE_JOB,
                payload: id
            });
            dispatch(returnMessage({ "Deleted": "Job removed" }, res.status))
        }).catch((err) => dispatch(
            returnMessage(
                err.response.data, err.response.status
            )
        ));
};

export const addJob = (job) => (dispatch, getState) => {
    axios.post(`/api/jobs/`, job, configToken(getState))
        .then((res) => {
            dispatch({
                type: ADD_JOB,
                payload: res.data
            });
            dispatch(returnMessage({ "Added": job.name }, res.status))
        }).catch((err) => dispatch(
            returnMessage(
                err.response.data, err.response.status
            )
        )
        );
};