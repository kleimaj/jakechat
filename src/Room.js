import React, { useState, useEffect, useCallback } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import { Link } from 'react-router-dom';


const Room = (props) => {

    const [username, setUsername] = useState('');
    const [room, setRoom] = useState();
    const [token, setToken] = useState();
    const [participants, setParticipants] = useState([]);

    const remoteParticipants = participants.map(participant => (
        <Participant key={participant.sid} participant={participant} />
    ));
    const handleUsernameChange = useCallback(event => {
        setUsername(event.target.value);
      }, []);
    const handleSubmit = useCallback(async event => {
        event.preventDefault();
        const roomName = window.location.pathname.substr(1);
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
    });

    useEffect(() => {
        const participantConnected = participant => {
          setParticipants(prevParticipants => [...prevParticipants, participant]);
        };
        const participantDisconnected = participant => {
          setParticipants(prevParticipants =>
            prevParticipants.filter(p => p !== participant)
          );
        };
        if (props.location.state) {
            // token=props.location.state.token
            setToken(props.location.state.token);
            Video.connect(props.location.state.token, {
            name: props.location.state.roomName
            }).then(room => {
            setRoom(room);
            console.log(room)
            room.on('participantConnected', participantConnected);
            room.on('participantDisconnected', participantDisconnected);
            room.participants.forEach(participantConnected);
            });
            return () => {
                setRoom(currentRoom => {
                  if (currentRoom && currentRoom.localParticipant.state === 'connected') {
                    currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
                      trackPublication.track.stop();
                    });
                    currentRoom.disconnect();
                    return null;
                  } else {
                    return currentRoom;
                  }
                });
              };
        }
        else if (token) {
            console.log("connecting video")
            Video.connect(token, {
                name: window.location.pathname.substr(1)
                }).then(room => {
                setRoom(room);
                console.log(room)
                room.on('participantConnected', participantConnected);
                room.on('participantDisconnected', participantDisconnected);
                room.participants.forEach(participantConnected);
                });
                return () => {
                    setRoom(currentRoom => {
                      if (currentRoom && currentRoom.localParticipant.state === 'connected') {
                        currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
                          trackPublication.track.stop();
                        });
                        currentRoom.disconnect();
                        return null;
                      } else {
                        return currentRoom;
                      }
                    });
                  };
        }
        else {
            console.log("HERE3");
        }
      }, [token]);
      
      if (!token) {
          console.log("HERE")
          const roomName = window.location.pathname.substr(1)
          return (
            <div>
                <h2>Entering Room: {roomName}</h2>
                <Link to="/"> <button>Leave Room</button> </Link>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                        type="text"
                        id="field"
                        required
                        value={username}
                        onChange={handleUsernameChange}
                        />
                    </div>
                  <button type="submit">Submit</button>

                </form>
                
            </div>
          )
      }
      const roomName = window.location.pathname.substr(1)
        // connect() infinite loop

      return (
        <div className="room">
          <h2>Room: {roomName}</h2>
          <Link to="/"> <button>Leave Room</button> </Link>
          <button className="buttonLeft" onClick={() => {
            var textField = document.createElement('textarea')
            textField.innerText = window.location.href
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove()
          }}>Invite Friends</button>

          <div className="local-participant">
            {room ? (
              <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
            ) : (
              ''
            )}
          </div>
          <h3>Remote Participants</h3>
          <div className="remote-participants">{remoteParticipants}</div>
        </div>
      );
}

export default Room;