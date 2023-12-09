import { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import { NavLink } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = () => {
  const { displayReport } = useContext(AppContext);

  return (
    <nav className="navbar flex items-center justify-between bg-secondary-content px-8 shadow-xl md:py-2">
      <NavLink to="/">
        <span
          role="button"
          className="pl-0 font-brand text-4xl font-bold text-info md:pl-10 md:text-5xl"
        >
          Overachiever
        </span>
      </NavLink>
      <div className="flex-none">
        <ul className="menu menu-horizontal hidden space-x-3 px-1 md:flex">
          <li>
            <NavLink
              to="/"
              className={`rounded-md px-5 text-xl hover:bg-info hover:text-slate-900 ${
                displayReport ? "btn-disabled" : "btn-ghost"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={`rounded-md px-5 text-xl hover:bg-info hover:text-slate-900 ${
                displayReport ? "btn-disabled" : "btn-ghost"
              }`}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={`rounded-md px-5 text-xl hover:bg-info hover:text-slate-900 ${
                displayReport ? "btn-disabled" : "btn-ghost"
              }`}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`rounded-md px-5 text-xl hover:bg-info hover:text-slate-900 ${
                displayReport ? "btn-disabled" : "btn-ghost"
              }`}
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center justify-center space-x-4 pl-2 pt-1">
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
