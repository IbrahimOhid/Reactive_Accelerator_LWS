import React, { useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
        console.log('Calling Play')
      ref.current.play();
    } else {
        console.log('Calling Pause')
      ref.current.pause();
    }
  }, [isPlaying]);
  return (
    <div>
      <video src={src} ref={ref} />
    </div>
  );
};

export default VideoPlayer;
