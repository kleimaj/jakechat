import React from 'react';

const Modal = ({show}) => {
    if (show) {
        return (
            <div>
                <h1>Modal</h1>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Modal;