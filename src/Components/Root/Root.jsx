import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import "./root.css";

const Root = () => {
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


  return (
    <div className="max-w-7xl mx-auto bg-[#e0fde5] dark:bg-gray-900 text-black">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
