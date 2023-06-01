import { createContext } from "react";
// Takes in some data
// 1.takes a default value
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy Email",
  },
});

export default UserContext;
