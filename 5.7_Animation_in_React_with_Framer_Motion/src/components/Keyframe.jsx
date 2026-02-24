import React from "react";
import { motion } from "motion/react";

const Keyframe = () => {
  return (
    <motion.div
      className="bg-pink-600 w-32 h-32"
      animate={{
        borderRadius: ["20%", "40%", "20%", "80%", "20%"],
        rotate: ["0", "30", "80", "270", "0"],
        scale: [1, 2, 3, 5, 7, 1],
      }}
      transition={{ duration: 5 }}
    />
  );
};

export default Keyframe;
