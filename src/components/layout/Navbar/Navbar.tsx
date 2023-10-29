import { ChangeEvent } from "react";
import { NavLink } from "react-router-dom";
import Tracker from "../Navbar Features/Tracker";
import ThemeToggler from "../Navbar Features/ThemeToggler";
import { Task } from "../../../Types/TaskType";

type NavbarProps = {
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  theme: string;
  taskList: Task[];
};

const Navbar = ({ toggleTheme, theme, taskList }: NavbarProps) => {
  return (
    <nav className="navbar flex justify-between bg-secondary px-8 text-slate-50">
      <NavLink to="/">
        <span className="font-brand text-6xl font-bold">Overachiever</span>
      </NavLink>
      <div className="flex-none">
        <ul className="menu menu-horizontal hidden px-1 md:flex">
          <li>
            <NavLink
              to="/"
              className="btn-ghost px-6 text-xl hover:bg-primary-focus hover:text-slate-900"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className="btn-ghost px-6 text-xl hover:bg-primary-focus hover:text-slate-900"
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className="btn-ghost px-6 text-xl hover:bg-primary-focus hover:text-slate-900"
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="btn-ghost px-6 text-xl hover:bg-primary-focus hover:text-slate-900"
            >
              About
            </NavLink>
          </li>
        </ul>
        <ul className="flex space-x-4 pl-4">
          <li>
            <Tracker taskList={taskList} />
          </li>
          <li>
            <ThemeToggler toggleTheme={toggleTheme} theme={theme} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
