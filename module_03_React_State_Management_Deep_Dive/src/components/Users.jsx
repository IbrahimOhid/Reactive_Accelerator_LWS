import React from "react";
import User from "./User";

const Users = ({ users }) => {
  return (
    <div className="flex p-12 gap-5">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
