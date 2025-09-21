import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
const MyComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`px-3 py-1 rounded-xl ${
          isPlaying ? "bg-red-400" : "bg-green-400"
        }`}
      >
        {" "}
        {isPlaying ? "Pause" : "Play"}
      </button>
      <h1>{isPlaying ? "Pause" : "Play"}</h1>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

export default MyComponent;
