import React, { use, useState } from "react";
import icon from "../../assets/icons8-earth-48.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  
  const [logout, setLogout] = useState(true);

  const handleLogout = () => {
    setLogout(!logout);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
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
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Issue</a>
                </li>
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
                <img
                  className="w-9 h-9 object-cover rounded-full hover:cursor-pointer"
                  src={user.photoURL || "/default-avatar.png"}
                  alt="avatar"
                />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn border-none mr-2 bg-green-800 rounded-md py-1 px-6 font-semibold">
                Login
              </Link>
              <Link
                to="/register"
                className="btn border-none bg-green-800 rounded-md py-1 px-6 font-semibold">
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
