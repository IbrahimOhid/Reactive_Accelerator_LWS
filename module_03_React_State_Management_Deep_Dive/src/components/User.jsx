import { UserContextHook } from "../assets/hook/UseUsersHook";

const User = ({ user }) => {
  const { state, dispatch } = UserContextHook();
  const handleDelete = (id) => {
    dispatch({type:'DELETE_USER', payload: id})
  };
  return (
    <div className="bg-teal-600 p-10 text-white text-lg">
      <p>{user.id}</p>
      <h1>{user.name}</h1>
      <button
        onClick={() => handleDelete(user.id)}
        className="bg-red-500 px-3 rounded-3xl mt-3 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default User;
