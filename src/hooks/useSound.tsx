import React, { useState } from 'react'

import AudioPlayer from '../AudioPlayer.js'

function useSound(soundUrl) {
  const [play, setPlay] = useState(false)

  const playSound = () => setPlay(true)
  const stopSound = () => setPlay(false)

  return {
    playing: play,
    playSound,
    stopSound,
    AudioComponent: () => (
      <AudioPlayer
        src={soundUrl}
        play={play}
        onEnd={stopSound}
      />
    )
  }
}

export default useSound
