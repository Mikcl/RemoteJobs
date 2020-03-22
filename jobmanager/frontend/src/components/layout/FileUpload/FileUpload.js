import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const FileUpload = (FileUploadProps) => {

    const { fileDesired, callback } = FileUploadProps

    const [filename, setFilename] = useState('Choose file');


    const onChange = e => {
        setFilename(e.target.files[0].name);
        if (callback) {
            callback(e.target.files[0])
        }
    };

    return (
        <div>
            {fileDesired ? fileDesired : "File"}
            <div className='custom-file mb-4'>
                <input
                    type='file'
                    className='custom-file-input'
                    id='customFile'
                    onChange={onChange}
                />
                <label className='custom-file-label' htmlFor='customFile'>
                    {filename}
                </label>
            </div>
        </div>
    )
}

FileUpload.propTypes = {
    fileDesired: PropTypes.string,
    callback: PropTypes.func
}