import { useOnlineStatus } from "../hooks/UseOnlineStatus";


const StatusBar = () => {
  const isOnline = useOnlineStatus()
  return (
    <div className="text-center py-10">
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
    </div>
  );
};

export default StatusBar;
