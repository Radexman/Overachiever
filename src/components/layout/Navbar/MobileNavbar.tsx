import { HiOutlineHome as Home } from "react-icons/hi";
import { FaTasks as Tasks } from "react-icons/fa";
import { BsFillPieChartFill as Chart } from "react-icons/bs";
import { AiOutlineQuestionCircle as Faq } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="sticky inset-x-0 bottom-0 block h-16 md:hidden">
      <div className="btm-nav">
        <NavLink to="/" className="nav-link group">
          <button className="nav-button">
            <Home size={25} />
          </button>
        </NavLink>
        <NavLink to="/tasks" className="nav-link group">
          <button className="nav-button">
            <Tasks size={25} />
          </button>
        </NavLink>
        <NavLink to="/stats" className="nav-link group">
          <button className="nav-button">
            <Chart size={25} />
          </button>
        </NavLink>
        <NavLink to="/about" className="nav-link group">
          <button className="nav-button">
            <Faq size={25} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
