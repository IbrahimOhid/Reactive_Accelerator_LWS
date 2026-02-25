import React from 'react'
import {motion} from 'motion/react'

const Box = () => {
  return (
    <motion.div
        className="bg-pink-500 border-2 border-amber-500 w-32 h-32 m-10"
        animate={{
            x: 400,
            rotate: 350
        }}
        transition={{
            duration: 3,
            delay: 1,
            repeat: Infinity,
            ease: 'anticipate'
        }}
    />
  )
}

export default Box