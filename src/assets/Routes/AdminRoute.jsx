import React from "react";
import useRole from "../../Hook/useRole";
import ForbiddenPage from "../../Components/Pages/ForbiddenPage";

const AdminRoute = ({ children }) => {
  const { role, isLoading } = useRole();

  if (isLoading) {
    return (
      <div className="min-h-screen text-center">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (role !== "admin") {
    return <ForbiddenPage></ForbiddenPage>;
  }
  return children;
};

export default AdminRoute;
