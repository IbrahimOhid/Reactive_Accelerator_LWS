import React, { useEffect } from "react";
import { createConnection } from "../utils/connection";

const ChatRoomServer = ({ roomId }) => {
  const serverUrl = "http://localhost:5173/";
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  return (
    <div>
      <h1>
        Welcome To The <span className="font-bold">{roomId}</span> Room
      </h1>
    </div>
  );
};

export default ChatRoomServer;
