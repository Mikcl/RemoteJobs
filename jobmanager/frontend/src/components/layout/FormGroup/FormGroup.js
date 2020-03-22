import React from 'react'

export const FormGroup = (FormGroupProps) => {

    const { label, type, placeholder, currentValue, callback } = FormGroupProps;

    return (
        <div className="form-group">
            <label>
                {label}
                <input
                    type={type}
                    className="form-control" placeholder={placeholder}
                    value={currentValue}
                    onChange={e => callback(e.target.value)}
                />
            </label>
        </div>
    )
}