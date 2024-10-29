// AudioPlayer.jsx
import { useRef, useEffect } from 'react';

const AudioPlayer = ({ src, play, onEnd }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (play) {
        // Using catch to handle any play() promise rejection
        const playPromise = audioElement.play();

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback error:", error);
          });
        }
      } else {
        // Only pause if the audio is actually playing
        if (!audioElement.paused) {
          audioElement.pause();
        }
        audioElement.currentTime = 0;
      }
    }

    // Cleanup function
    return () => {
      if (audioElement && !audioElement.paused) {
        audioElement.pause();
      }
    };
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src={src}
      onEnded={onEnd}
      preload="auto"  // Preload the audio file
    />
  );
};

export default AudioPlayer;

