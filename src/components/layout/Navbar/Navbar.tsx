import { NavLink } from "react-router-dom";
import Tracker from "../Navbar Features/Tracker";
import ThemeToggler from "../Navbar Features/ThemeToggler";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between bg-secondary-content px-8 py-4 shadow-xl md:py-2">
      <NavLink to="/">
        <span className="pl-0 font-brand text-5xl font-bold text-info md:pl-10">
          Overachiever
        </span>
      </NavLink>
      <div className="flex-none">
        <ul className="menu menu-horizontal hidden px-1 md:flex">
          <li>
            <NavLink
              to="/"
              className="btn-ghost rounded-md px-5 text-xl hover:bg-info hover:text-slate-900"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className="btn-ghost rounded-md px-5 text-xl hover:bg-info hover:text-slate-900"
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className="btn-ghost rounded-md px-5 text-xl hover:bg-info hover:text-slate-900"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="btn-ghost rounded-md px-5 text-xl hover:bg-info hover:text-slate-900"
            >
              About
            </NavLink>
          </li>
        </ul>
        <ul className="flex space-x-4 pl-4">
          <li>
            <Tracker />
          </li>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
