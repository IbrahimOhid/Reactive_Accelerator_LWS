import React, { useReducer } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import { UserContext } from "../context/UsersContext";
import { initialValue, reducer } from "../reducers/usersReducer";

const ContextPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialValue )
  

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div>
        <NewUser />
        <Users />
      </div>
    </UserContext.Provider>
  );
};

export default ContextPractice;
