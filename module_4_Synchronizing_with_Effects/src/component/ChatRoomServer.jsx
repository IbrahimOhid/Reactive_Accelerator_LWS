import React, { useContext, useEffect } from "react";
import { createConnection, logVist } from "../utils/connection";
import { SettingContext } from "../contexts/Setting";

const ChatRoomServer = ({ roomId, selectedServerUrl }) => {
  const settings = useContext(SettingContext);
  const serverUrl =
    selectedServerUrl ?? settings.defaultServerUrl;
    useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => {
        connection.disconnect();
      };
    }, [roomId, serverUrl]);

  // useEffect(() => {
  //   logVist(roomId);
  // }, [roomId]);
  return (
    <div>
      <h1>
        Welcome To The <span className="font-bold">{roomId}</span> Room
      </h1>
    </div>
  );
};

export default ChatRoomServer;
