import React, { use, useState } from 'react'

const Pointer = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const handlePointerMove = (e)=>{
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh'
        }}
        onPointerMove={handlePointerMove}
        >
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                top: -10,
                left: -10,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            ></div>
        </div>
    )
}

export default Pointer