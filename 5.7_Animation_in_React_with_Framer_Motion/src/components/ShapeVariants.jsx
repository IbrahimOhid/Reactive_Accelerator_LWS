import React from "react";
import { motion } from "motion/react";
import { animate } from "motion";

const ShapeVariants = () => {
  const shapeVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };
  return (
    <div>
      <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className="bg-pink-500  border-2 border-blue-700 w-32 h-32 m-20"
      ></motion.div>
    </div>
  );
};

export default ShapeVariants;
