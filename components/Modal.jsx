import React from 'react'

import ReactPlayer from 'react-player'

function Modal({ visible, onClose }) {
  //verifica que el evento target.id sea igual a container y si es igual lo cierra
  const handleClose = (e) => {
    if (e.target.id === 'container') onClose()
  }

  //si el argumento visible que le pasa por props App.js no es true, no muestra el video
  if (!visible) return null

  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
    >
      {/* <div className="bg-white p-2 rounded">
        <video
          src={video}
          controls
          autoPlay
          muted
          className="max-w-2xl aspect-video"
        ></video>
      </div> */}
      <ReactPlayer
        volume={0.5}
        url="https://www.youtube.com/watch?v=odaagpiysHs"
      />
    </div>
  )
}

export default Modal
