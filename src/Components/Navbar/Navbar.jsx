import React from "react";
import icon from "../../assets/icons8-earth-48.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-[#298d3592] text-white relative">
      <div className="navbar-start relative z-10">
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

      <div className="navbar-end">
        <div className="hidden lg:block">
          <NavLink className='font-semibold mr-4' to='/'>Home</NavLink>
          <NavLink className='font-semibold mr-4' to='/issue'>Issue</NavLink>
        </div>

        <button className="btn border-none mr-2 bg-green-800 rounded-md py-1 px-6 font-semibold">
          Login
        </button>
        <button className="btn border-none bg-green-800 rounded-md py-1 px-6 font-semibold">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
