import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import icon from "../../assets/icons8-earth-48.png";
import UseAuth from "../../Components/Context/UseAuth";
import Swal from "sweetalert2";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logOut } = UseAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <header className="h-14 bg-indigo-50 dark:bg-slate-900 border-b border-indigo-100 dark:border-slate-800 flex items-center justify-between px-4 md:px-6 shadow-sm">
      <Link to="/">
        <img className="w-8" src={icon} alt="" />
      </Link>

      <h1 className="font-semibold tracking-wide text-slate-800 dark:text-slate-100">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdown((p) => !p)}
            className="flex items-center gap-2 focus:outline-none group">
            {user.photoURL ? (
              <img
                className="w-9 h-9 rounded-full object-cover"
                src={user.photoURL}
                alt="avatar"
              />
            ) : (
              <RxAvatar className="text-3xl" />
            )}
          </button>

          {dropdown && (
            <div className="absolute z-20 right-0 mt-4 w-48 bg-secondary text-accent shadow-xl rounded-xl border border-indigo-100 overflow-hidden origin-top-right animate-dropdown">
              <Link
                to="/dashboard/profile"
                className="block px-4 py-2 text-s hover:bg-white/20 transition">
                Profile
              </Link>
              <Link
                to="/dashboard/home"
                className="block px-4 py-2 text-sm hover:bg-white/20 transition">
                Dashboard Home
              </Link>
              <Link
                to="/dashboard/aboutUs"
                className="block px-4 py-2 text-sm hover:bg-white/20 transition">
                About Us
              </Link>
              <Link
                to="/dashboard/privacy-policy"
                className="block px-4 py-2 text-sm hover:bg-white/20 transition">
                Privacy Policy
              </Link>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
