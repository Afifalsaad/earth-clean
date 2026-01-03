import { NavLink } from "react-router";
import { userMenu, adminMenu } from "./menus";

const Sidebar = ({ open, setOpen, role }) => {
  const menu = role === "admin" ? adminMenu : userMenu;

  return (
    <aside
      className={`fixed md:static z-40 h-full w-64 bg-white dark:bg-slate-800 shadow-lg transform ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } transition-transform duration-300`}>
      <div className="p-4 font-bold text-lg border-b dark:border-slate-700">
        Dashboard
      </div>

      <nav className="p-2 space-y-1">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 ${
                isActive ? "bg-slate-200 dark:bg-slate-700 font-semibold" : ""
              }`
            }>
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
