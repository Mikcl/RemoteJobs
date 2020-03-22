import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

export const Alert = () => {
    const alert = useAlert();

    const messages = useSelector(state => state.messages);

    const message = useSelector(state => state.messages.message)
    const status = useSelector(state => state.messages.status)

    useEffect(() => {
        for (const key in message) {
            const description = message[key];
            if (status >= 400) {
                alert.error(`${key}: ${description}`)
            } else {
                alert.success(`${key}: ${description}`)
            }
        }
    }, [messages])

    return (
        <></>
    );
}