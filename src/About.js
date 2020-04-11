import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import { Link } from 'react-router-dom';


const About = (props) => {
    // let roomName = props.location.state.roomName;
    // let token = props.location.state.token;
    // console.log(props)
    const [room, setRoom] = useState();
    const [participants, setParticipants] = useState([]);

    const remoteParticipants = participants.map(participant => (
        <Participant key={participant.sid} participant={participant} />
    ));

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
        else {
            console.log("HERE3");
        }
      }, []);
      if (!props.location.state) {
          console.log("HERE")
          const roomName = window.location.pathname.substr(1)
          return (
            <div className="room">
                <h2>Entering Room: {roomName}</h2>
                
            </div>
          )
      }
      return (
        <div className="room">
          <h2>Room: {props.location.state.roomName}</h2>
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

export default About;