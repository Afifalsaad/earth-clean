import React, { useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import "./root.css";

const Root = () => {
  const { loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "Home";
    }
    else if (path === "/login"){
      document.title = 'Login'
    }
    else if (path === "/register"){
      document.title = 'Register'
    }
    else if (path === "/allIssues"){
      document.title = 'All Issues'
    }
    else if (path.startsWith("/issueDetails/")){
      document.title = 'Issue Details'
    }
    else if (path === "/myIssues"){
      document.title = 'My Issues'
    }
    else if (path === "/addIssues"){
      document.title = 'Add Issues'
    }
    else if (path === "/myContribution"){
      document.title = 'My Contribution'
    }
  });

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

  return (
    <div className="max-w-7xl mx-auto bg-[#e0fde5] dark:bg-gray-900">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
