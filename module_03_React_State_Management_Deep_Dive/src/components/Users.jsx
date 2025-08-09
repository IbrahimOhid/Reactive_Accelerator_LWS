import User from "./User";
import { UserContextHook } from "../assets/hook/UseUsersHook";

const Users = ({ handleDeleteUser }) => {
  const { users } = UserContextHook();
  return (
    <div className="flex p-12 gap-5">
      {users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </div>
  );
};

export default Users;
