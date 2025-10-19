import { useOnlineStatus } from "../hooks/UseOnlineStatus";

const SaveButton = () => {
  const isOnline = useOnlineStatus();

  const handleClick = () => {
    console.log("Progress");
  };
  return (
    <div className="text-center">
      <button
        disabled={!isOnline}
        onClick={handleClick}
        className={`${
          isOnline ? "bg-green-400" : "bg-gray-400"
        } font-bold px-3 py-1 rounded-2xl cursor-pointer`}
      >
        {isOnline ? "Save Progress" : "Reconnecting..."}
      </button>
    </div>
  );
};

export default SaveButton;
