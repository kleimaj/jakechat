import React, { useState, useEffect, useRef } from 'react';

const Participant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = trackMap => Array.from(trackMap.values())
    .map(publication => publication.track)
    .filter(track => track !== null);

  useEffect(() => {
    const trackSubscribed = track => {
      console.log("track subscribed")
      if (track.kind === 'video') {
        setVideoTracks(videoTracks => [...videoTracks, track]);
      } else {
        setAudioTracks(audioTracks => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = track => {
      console.log("track unsubscribed",track)
      if (track.kind === 'video') {
        setVideoTracks(videoTracks => videoTracks.filter(v => v !== track));
      } else {
        setAudioTracks(audioTracks => audioTracks.filter(a => a !== track));
      }
    };

    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    participant.on('trackDisabled', track => {
      // hide or remove the media element related to this track
      console.log("disabled");
      document.getElementById(participant.identity).style.visibility="hidden";
      // let p = document.querySelector(".local-participant > .participant").children;
      // p.item(1).style="visibility:hidden";
      
      // console.log(track)
    });
    participant.on('trackEnabled', track => {
      // show the track again
      document.getElementById(participant.identity).style.visibility="visible";
      // p.item(1).style="visibility:visible";
      console.log("enabled")
    });

    return () => {
      console.log("removes listeners")
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);
  
  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
  const audioTrack = audioTracks[0];
  if (audioTrack) {
    audioTrack.attach(audioRef.current);
    return () => {
      audioTrack.detach();
    };
  }
}, [audioTracks]);
  
  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      <video ref={videoRef} autoPlay={true} id={participant.identity} />
      <audio ref={audioRef} autoPlay={true} muted={true} />
    </div>
  );
};

export default Participant;