import React, { useState } from "react";
import { UserContextHook } from "../assets/hook/UseUsersHook";

const NewUser = () => {
  const { state, dispatch } = UserContextHook();
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), name: userName };
    dispatch({type: 'ADD_USER', payload: newUser})
    setUserName("");
  };
  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Your Name"
          className="border"
        />
        <button className="bg-teal-400 px-4 cursor-pointer py-1 rounded-2xl">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewUser;
