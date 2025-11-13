import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user ,loading} = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center mx-auto">
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
