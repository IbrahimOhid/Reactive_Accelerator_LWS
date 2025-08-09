import User from "./User";
import { UserContextHook } from "../assets/hook/UseUsersHook";

const Users = ({ handleDeleteUser }) => {
  const { state, dispatch } = UserContextHook();
  return (
    <div className="flex p-12 gap-5">
      {state.users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </div>
  );
};

export default Users;
