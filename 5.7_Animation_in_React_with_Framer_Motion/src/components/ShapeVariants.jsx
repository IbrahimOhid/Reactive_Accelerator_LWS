import React from "react";
import { motion } from "motion/react";

const ShapeVariants = () => {
  const shapeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };
  const childVariants = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 2,
      duration: 3,
      delay:2
    },
  };
  return (
    <div>
      <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className="bg-green-500  border-2 border-blue-700 w-32 h-32 m-20"
      >
        <motion.div
          variants={childVariants}
          className="bg-red-500 w-12 h-12 rounded-full mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default ShapeVariants;
