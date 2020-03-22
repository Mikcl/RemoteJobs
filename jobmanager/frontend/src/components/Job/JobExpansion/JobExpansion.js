import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ToggleContent, Modal } from '../../layout/Modal';
import { Button } from '../../layout/Button';
import { slideDown } from './animations';
import { JobStatus } from '../JobStatus';
import { ApplyJob } from '../../Forms/ApplyJob';

import './JobExpansion.css';

const getButton = (application, onClick) => {
    if (application) {
        return <Button className="btn btn-primary" onClick={() => onClick()}>Apply</Button>
    } else {
        return <Button className="btn btn-success" onClick={() => onClick()}>View Status</Button>
    }
}

const getForm = (application, job) => {
    if (application) {
        return <ApplyJob job={job} />
    }
    return <JobStatus job={job} />
}

export const JobExpansion = (ExpansionProps) => {
    const { job, applicationMode } = ExpansionProps;
    const { name, company, description } = job;
    const descElement = useRef();

    useEffect(() => {
        slideDown(descElement.current);
    }, []);

    return (

        <tr className="expandable" key="tr-expander">
            <td colSpan={4}>
                <div ref={descElement} className="inner">
                    <p className="Description">
                        <i>
                            {description}
                        </i>
                    </p>
                    <ToggleContent
                        toggle={show => getButton(applicationMode, show)}
                        content={hide => (
                            <Modal hideCallback={() => hide()}>
                                <>
                                    {getForm(applicationMode, job)}
                                </>
                            </Modal>
                        )}
                    />
                </div>
            </td>
        </tr>
    );
}

JobExpansion.propTypes = {
    job: PropTypes.object,
    applicationMode: PropTypes.bool.isRequired
}

