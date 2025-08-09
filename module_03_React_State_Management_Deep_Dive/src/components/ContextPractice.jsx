import React, { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { UserContext } from "../context/UsersContext";

const ContextPractice = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Mohammad" },
    { id: 2, name: "Ibrahim" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div>
        <NewUser />
        <Users />
      </div>
    </UserContext.Provider>
  );
};

export default ContextPractice;
