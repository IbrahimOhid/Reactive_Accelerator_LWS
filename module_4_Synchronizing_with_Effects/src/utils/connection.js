export const createConnection = (serverUrl, roomId) => {
  return {
    connect() {
      console.log(
        '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
      );
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    },
  };
};

export const logVist = (roomId)=>{
    console.log(`User Visited ${roomId} Room`)
}
