import { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import { HiOutlineHome as Home } from "react-icons/hi";
import { FaClipboardQuestion as Faq } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const { displayReport, taskList } = useContext(AppContext);

  const taskListLength = taskList.length;

  return (
    <div className="sticky inset-x-0 bottom-0 z-20 block h-16 md:hidden">
      <div className="btm-nav">
        <NavLink
          to="/"
          className={`nav-link group ${displayReport && "btn-disabled"}`}
        >
          <button className="nav-button">
            <Home size={25} />
          </button>
        </NavLink>
        <NavLink
          to="/tasks"
          className={`nav-link group ${displayReport && "btn-disabled"}`}
        >
          <button className="nav-button relative">
            <div
              className={`${
                taskListLength === 0 ? "hidden" : "flex"
              } absolute -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm font-bold text-slate-900`}
            >
              {taskListLength}
            </div>
            <FaListUl size={25} />
          </button>
        </NavLink>
        <NavLink
          to="/stats"
          className={`nav-link group ${displayReport && "btn-disabled"}`}
        >
          <button className="nav-button">
            <FaAddressCard size={25} />
          </button>
        </NavLink>
        <NavLink
          to="/about"
          className={`nav-link group ${displayReport && "btn-disabled"}`}
        >
          <button className="nav-button">
            <Faq size={25} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
