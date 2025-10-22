import React, { useEffect, useRef } from "react";

const Welcome = () => {
  const ref = useRef(null);
  useEffect(() => {
    const duration = 1000;
    const node = ref.current;
    let startTime = performance.now();
    let frameId = null;

    const onprogress = (progress) => {
      node.style.opacity = progress;
    };
    const onFrame = (now) => {
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      onprogress(progress);
      if (progress < 1) {
        frameId = requestAnimationFrame(onFrame);
      }
    };
    const start = () => {
      onprogress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    };
    start();

    const stop = ()=>{
        cancelAnimationFrame(frameId);
        startTime = null;
        frameId = null
    }

    return () => stop();
  }, []);
  return (
    <div>
      <h1 ref={ref} className="welcome">
        WELCOME
      </h1>
    </div>
  );
};

export default Welcome;
