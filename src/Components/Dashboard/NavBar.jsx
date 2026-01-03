import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ setOpen }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="h-14 bg-white dark:bg-slate-800 border-b dark:border-slate-700 flex items-center justify-between px-4">
      <button className="md:hidden" onClick={() => setOpen((p) => !p)}>
        ☰
      </button>

      <h1 className="font-semibold">Dashboard</h1>

      <div className="relative">
        <button
          onClick={() => setDropdown((p) => !p)}
          className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
        </button>

        {dropdown && (
          <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 shadow rounded overflow-hidden">
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700">
              Profile
            </Link>
            <Link
              to="/dashboard"
              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700">
              Dashboard Home
            </Link>
            <button className="w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-800 text-red-600">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
