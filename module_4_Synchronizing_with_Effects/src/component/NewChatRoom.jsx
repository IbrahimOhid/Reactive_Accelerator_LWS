import React, { useState } from "react";
import ChatRoomServer from "./ChatRoomServer";

const NewChatRoom = () => {
  const [roomId, setRoomId] = useState("General");
  const [showChat, setShowChat] = useState(true);
  const handleChange = (e)=>{
    setRoomId(e.target.value)
  }
  return (
    <div className="text-center py-10">
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
      {showChat && (
        <div>
          <hr />
          <div>
            Select Chat Room
            <select className='my-5 border ' onChange={handleChange}>
              <option value="General">General</option>
              <option value="Travel">Travel</option>
              <option value="Music">Music</option>
            </select>
            <ChatRoomServer  roomId={roomId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewChatRoom;
