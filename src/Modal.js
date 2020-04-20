import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCopy } from '@fortawesome/free-solid-svg-icons'


const Modal = ({show, setShow}) => {
    if (show) {
        return (
            <div className="modal">
                <div className="modalBody">
                    <button className="modalClose" onClick={() => setShow(false)}><FontAwesomeIcon icon={faTimes} /></button>
                    <h2>Invite your Friends</h2>
                    <p>Want to chat with more people? Reach out and invite your friends to the room!</p>
                    <h3>click to copy</h3>
                    <div className="inviteContainer">
                    <input className="inviteLink" onClick={(event)=> {
                        // document.execCommand
                        event.target.select();
                        document.execCommand('copy')
                    }} onChange={() => {}} value={window.location.href}/>
                    <button onClick={() => {
                        let textField = document.createElement('textarea');
                        textField.innerText = window.location.href;
                        document.body.appendChild(textField);
                        textField.select();
                        document.execCommand('copy');
                        textField.remove();
                    }}>
                        <FontAwesomeIcon icon={faCopy} />
                    </button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Modal;