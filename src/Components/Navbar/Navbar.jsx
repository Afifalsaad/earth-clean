import React, { useContext, useState } from "react";
import icon from "../../assets/icons8-earth-48.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { RxAvatar } from "react-icons/rx";
import Swal from "sweetalert2";
import useRole from "../../Hook/useRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [logout, setLogout] = useState(true);
  const { role, isLoading } = useRole();
  console.log(role);

  if (isLoading) {
    return null;
  }

  const handleLogout = () => {
    setLogout(!logout);
  };

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
    <div className="flex justify-between py-3 items-center bg-[#95cfcfd8] text-white relative ">
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

      <div className="flex items-center mr-1">
        <div className="hidden lg:block">
          <NavLink className="font-semibold mr-4" to="/">
            Home
          </NavLink>
          <NavLink className="font-semibold mr-4" to="/allIssues">
            All Issues
          </NavLink>

          {user && (
            <>
              {" "}
              <NavLink className="font-semibold mr-4" to="/addIssues">
                Add Issue
              </NavLink>
              <NavLink className="font-semibold mr-4" to="/myIssues">
                My Issues
              </NavLink>
              <NavLink className="font-semibold mr-4" to="/myContribution">
                My Contribution
              </NavLink>
            </>
          )}
          {role === "admin" && (
            <>
              <NavLink className="font-semibold mr-4" to="/dashboard">
                Dashboard
              </NavLink>
            </>
          )}
        </div>

        <div>
          {user ? (
            <div className="relative flex items-center gap-4 group mr-3">
              {logout ? (
                ""
              ) : (
                <button
                  onClick={handleSignOut}
                  className="bg-sky-950 py-1 px-4 rounded-xl hover:cursor-pointer">
                  Logout
                </button>
              )}

              <button onClick={handleLogout}>
                {user.photoURL ? (
                  <img
                    className="w-9 h-9 object-cover rounded-full hover:cursor-pointer"
                    src={user.photoURL}
                    alt="avatar"
                  />
                ) : (
                  <RxAvatar className="text-3xl hover:cursor-pointer text-black" />
                )}
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-sky-950 dark:text-white-200 py-2 mr-2 px-4 rounded-xl hover:cursor-pointer">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-sky-950 dark:text-white-200 py-2 mr-2 px-4 rounded-xl hover:cursor-pointer">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
