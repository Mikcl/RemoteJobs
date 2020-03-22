import { combineReducers } from 'redux';
import jobs from './jobs';
import messages from './messages';
import auth from './auth';
import applications from './applications';

export default combineReducers({
    jobs,
    messages,
    auth,
    applications
});