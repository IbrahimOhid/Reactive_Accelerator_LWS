import { useContext } from "react";
import { UserContext } from "../../context/UsersContext";

export const UserContextHook = () => {
  return useContext(UserContext);
};
