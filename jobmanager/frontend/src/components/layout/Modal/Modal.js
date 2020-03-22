import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import './Modal.css'

export const ToggleContent = (ToggleContentProps) => {

    const { toggle, content } = ToggleContentProps;

    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);

    return (
        <>
            {toggle(show)}
            {isShown && content(hide)}
        </>
    );
};


const Portal = ({ children }) => {
    const modalRoot = document.getElementById("modal");
    const el = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(el);
    }, []);

    return createPortal(children, el);

};

export const Modal = (ModalProps) => {

    const { children, hideCallback } = ModalProps;

    return (
        <Portal>
            <div className="ModalWrapper">
                <div className="ModalCard">
                    {children}
                    <button className="close" onClick={() => hideCallback()} >
                        <img src="https:icon.now.sh/x/ff0000" alt="close" />
                    </button>
                </div>
                <div className="Background" onClick={() => hideCallback()} />
            </div>
        </Portal>
    );
}