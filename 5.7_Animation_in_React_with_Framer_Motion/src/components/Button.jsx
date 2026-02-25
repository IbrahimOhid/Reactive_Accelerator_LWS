import React from 'react'
import {motion} from 'motion/react'

const Button = () => {
  return (
    <div>
        <motion.button className='bg-orange-500 border px-3 py-2 m-20 rounded-md'
        whileTap={{
            scale: 0.5
        }}
        whileHover={{
            scale: 1.5
        }}
        >
            Tab Me
        </motion.button>

         <motion.button className='bg-blue-500 border px-3 py-2 m-20 rounded-md'
        whileTap={{
            scale: 0.5
        }}
        whileHover={{
            scale: 1.5,
            transition: {yoyo: Infinity}
        }}
        >
            Tab Me
        </motion.button>
    </div>
  )
}

export default Button