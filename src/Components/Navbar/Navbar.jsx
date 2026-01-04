import React, { useContext } from "react";
import icon from "../../assets/icons8-earth-48.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { RxAvatar } from "react-icons/rx";
import Swal from "sweetalert2";
import useRole from "../../Hook/useRole";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { role } = useRole();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        {
          Swal.fire({
            title: "Logout Successful",
            icon: "success",
          });
        }
      })
      .catch(() => {});
  };

  return (
    <div className="bg-secondary w-full sticky top-0 z-50">
      <div className="flex max-w-[1200px] mx-auto justify-between py-3 items-center text-accent relative">
        <div className="flex flex-row relative z-10 ml-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="bg-gray-50 text-black menu-sm dropdown-content absolute rounded-box z-40 mt-3 w-52 p-2 shadow">
              <li>
                <ul className="p-2">
                  <NavLink className="" to="/">
                    Home
                  </NavLink>
                  <br />
                  <NavLink className="" to="/allIssues">
                    All Issues
                  </NavLink>
                  <br />
                  <NavLink className="" to="/addIssues">
                    Add Issue
                  </NavLink>
                  <br />
                  <NavLink className="" to="/myIssues">
                    My Issues
                  </NavLink>
                  <br />
                  <NavLink className="" to="/myContribution">
                    My Contribution
                  </NavLink>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn-ghost text-xl">
            <img className="w-10" src={icon} alt="" />
          </Link>
        </div>

        <ThemeSwitcher></ThemeSwitcher>

        <div className="flex items-center mr-1">
          <div className="hidden lg:block">
            <NavLink className="text-sm mr-4" to="/">
              Home
            </NavLink>
            <NavLink className="text-sm mr-4" to="/allIssues">
              All Issues
            </NavLink>
            <NavLink className="text-sm mr-4" to="/About-us">
              About Us
            </NavLink>
            <NavLink className="text-sm mr-4" to="/Privacy-policy">
              Privacy Policy
            </NavLink>

            {user && (
              <>
                {" "}
                <NavLink className="text-sm mr-4" to="/addIssues">
                  Add Issue
                </NavLink>
                <NavLink className="text-sm mr-4" to="/myIssues">
                  My Issues
                </NavLink>
                <NavLink className="text-sm mr-4" to="/myContribution">
                  My Contribution
                </NavLink>
              </>
            )}
            {role === "admin" && (
              <>
                <NavLink className="text-sm mr-4" to="/dashboard">
                  Dashboard
                </NavLink>
              </>
            )}
          </div>

          <div>
            {user ? (
              <div className="dropdown dropdown-end mr-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  {user.photoURL ? (
                    <img
                      className="w-9 h-9 rounded-full object-cover"
                      src={user.photoURL}
                      alt="avatar"
                    />
                  ) : (
                    <RxAvatar className="text-3xl" />
                  )}
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-5 p-2 shadow bg-secondary rounded-box w-44">
                  <li>
                    <span className="text-sm text-accent font-bold cursor-default">
                      {user.displayName || "User"}
                    </span>
                  </li>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/About-us">About Us</NavLink>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="text-error">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary mx-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
