import React, { useEffect } from 'react'
import { createConnection } from '../utils/chat'

const ChatRoom = () => {
    useEffect(()=>{
        const connection = createConnection();
        connection.connect();
        return ()=>{
            connection.disconnect();
        }
    }, [])
  return (
    <div>
      <h1>Welcome To Chat Room !</h1>
    </div>
  )
}

export default ChatRoom
