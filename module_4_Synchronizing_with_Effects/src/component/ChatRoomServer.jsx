import React, { useEffect } from "react";
import { createConnection, logVist } from "../utils/connection";

const ChatRoomServer = ({ roomId, serverUrl }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  useEffect(() => {
    logVist(roomId);
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
