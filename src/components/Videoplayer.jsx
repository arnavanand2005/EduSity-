import React from 'react'
import '../styles/Videoplayer.css'
import video from '../assets/college-video.mp4'

export default function VideoPlayer({ playState, setPlayState }) {
    const handleClose = () => {
      setPlayState(false);
    };

  return (
    <div className={`video-player-container ${playState ? 'show' : ''}`} onClick={handleClose}>
      {playState && (
        <video 
          className='main-video' src={video} autoPlay muted controls
          onClick={(e) => e.stopPropagation()} 
        ></video>
      )}
    </div>
  )
}