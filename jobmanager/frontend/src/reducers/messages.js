import { GET_MESSAGES } from '../actions/types';

const initialState = {
    message: {},
    status: null
}

export const returnMessage = (message, status) => {

    return {
        type: GET_MESSAGES,
        payload: { message, status }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES: {
            return {
                message: action.payload.message,
                status: action.payload.status,
            }
        }
        default:
            return state
    }
}