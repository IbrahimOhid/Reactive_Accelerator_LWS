import React, {
  useEffect,
  useState,
  experimental_useEffectEvent as useEffectEvent,
} from "react";

const Pointer = () => {
  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const [canMove, setCanMove] = useState(true);

  const onMove = useEffectEvent((e) => {
    if (canMove) {
      setPointer({
        x: e.clientX,
        y: e.clientY,
      });
    }
  });
  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={canMove}
          onChange={(e) => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${pointer.x}px, ${pointer.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
};

export default Pointer;
