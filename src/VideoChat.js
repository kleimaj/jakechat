import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Lobby from './Lobby';

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);
  const [show, showForm] = useState(false);
  
  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value.replace(/\s+/g,'-').toLowerCase());
  }, []);

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const data = await fetch('http://localhost:3001/video/token', {
      method: 'POST',
      mode: 'cors', 
      body: JSON.stringify({
        identity: username,
        room: roomName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    setToken(data.token);
  }, [username, roomName]);

   let render;
  if (token) {
    render = (
        <Redirect to={{
          pathname: '/'+roomName,
          state: { roomName: roomName,
                   token: token }
        }}/>
    );
  } else {
    render = (
      !show ? <>
      <center>
      <h2>private 👏 simple 👏 free 👏 video 👏 chat</h2>
      <button className="startButton" onClick={() => showForm(true)}>Start</button>
      </center>
      </>
      :
      <Lobby
         username={username}
         roomName={roomName}
         handleUsernameChange={handleUsernameChange}
         handleRoomNameChange={handleRoomNameChange}
         handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;