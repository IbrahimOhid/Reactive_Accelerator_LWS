import { motion } from 'motion/react'
import React from 'react'

const Simple = () => {
  return (
    <motion.div
        className='bg-emerald-400 w-32 h-32 rounded-full'
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity:1, scale: 1}}
        transition={{duration: 5}}
    />
  )
}

export default Simple