import React, { useState } from "react";
import ChatRoomServer from "./ChatRoomServer";
import { SettingContext } from "../contexts/Setting";

const NewChatRoom = () => {
  const [roomId, setRoomId] = useState("General");
  const [showChat, setShowChat] = useState(true);
  const [serverUrl, setServerUrl] = useState(null);

  const handleChange = (e) => {
    setRoomId(e.target.value);
  };
  const handleServerChange = (e) => {
    setServerUrl(e.target.value);
  };
  return (
    <div className="text-center py-10">
      <div>
        Select Server
        <select className="my-5 border " onChange={handleServerChange}>
          <option value="http://localhost:1234">Server 1</option>
          <option value="http://localhost:12345">Server 2</option>
          <option value="http://localhost:12346">Server 3</option>
        </select>
      </div>

      <div>
        <button
          onClick={() => setShowChat((s) => !s)}
          className={`${
            showChat ? "bg-red-400" : "bg-green-400"
          } rounded-xl px-3 py-1 cursor-pointer font-bold my-5`}
        >
          {showChat ? "Hide Chat Room" : "Show Chat Room"}
        </button>
      </div>
      {/* <div>
        <input
          className="border"
          type="text"
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </div> */}
      {showChat && (
        <div>
          <hr />
          <div>
            Select Chat Room
            <select className="my-5 border " onChange={handleChange}>
              <option value="General">General</option>
              <option value="Travel">Travel</option>
              <option value="Music">Music</option>
            </select>
            <SettingContext.Provider
              value={{
                defaultServerUrl: "http://localhost:1000",
              }}
            >
              <ChatRoomServer roomId={roomId} selectedServerUrl={serverUrl} />
            </SettingContext.Provider>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewChatRoom;
