import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between bg-primary px-4">
      <NavLink to="/">
        <span className="btn btn-ghost text-xl normal-case">Overachiever</span>
      </NavLink>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="btn-ghost">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className="btn-ghost">
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className="btn-ghost">
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="btn-ghost">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
