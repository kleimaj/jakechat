import React from 'react';

const Modal = ({show, setShow}) => {
    if (show) {
        return (
            <div className="modal">
                <div className="modalBody">
                    <h2>Invite your Friends</h2>
                    <button onClick={() => setShow(false)}>Close</button>
                    <p>Want to chat with more people? Stay connected and invite your friends to the room!</p>
                    <h3>your referral link</h3>
                    <p className="inviteLink">{window.location.href}</p>
                    <button onClick={() => {
                        let textField = document.createElement('textarea');
                        textField.innerText = window.location.href;
                        document.body.appendChild(textField);
                        textField.select();
                        document.execCommand('copy');
                        textField.remove();
                    }}>Copy</button>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Modal;