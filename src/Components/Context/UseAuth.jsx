import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../../Provider/AuthProvider";

const UseAuth = () => {
  const authInfo = useContext(AuthContext);

  return authInfo;
};

export default UseAuth;
