import { motion } from "motion/react";
import React from "react";

const Text = () => {
  const message = "I love Programming";
  const wordArray = message.split(" ");
  return (
    <div className="text-center">
      {wordArray.map((word, index) => (
        <motion.span
            className="text-2xl"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 3, delay: index/10}}
            
         key={index}>{word} </motion.span>
      ))}
    </div>
  );
};

export default Text;
