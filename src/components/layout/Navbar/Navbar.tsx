import { FaCalendarCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between bg-secondary px-4">
      <NavLink to="/">
        <span className="text-2xl">Overachiever</span>
      </NavLink>
      <div className="flex-none">
        <ul className="menu menu-horizontal hidden px-1 sm:flex">
          <li>
            <NavLink to="/" className="btn-ghost px-8 text-xl">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className="btn-ghost px-8 text-xl">
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className="btn-ghost px-8 text-xl">
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="btn-ghost px-8 text-xl">
              About
            </NavLink>
          </li>
        </ul>
        <ul className="flex pl-4">
          <li className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <FaCalendarCheck size={30} className="text-" />
            <span className="absolute -top-4 right-1 text-2xl font-bold text-slate-700">
              7
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
