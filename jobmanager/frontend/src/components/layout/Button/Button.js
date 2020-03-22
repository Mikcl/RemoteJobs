import React from 'react'

export const Button = (ButtonProps) => {

    const { children, className, onClick } = ButtonProps;

    return (

        <button className={className} type="button" onClick={() => onClick()} >
            {children}
        </button>

    )
}
