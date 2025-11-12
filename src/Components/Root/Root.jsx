import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import "./root.css";

const Root = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center mx-auto">
        <div class="loader"><span></span><span></span><span></span></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto bg-[#e0fde5]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
