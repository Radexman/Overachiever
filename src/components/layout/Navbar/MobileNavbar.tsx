import { HiOutlineHome } from "react-icons/hi";
import { FaTasks } from "react-icons/fa";
import { BsFillPieChartFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="bock absolute inset-x-0 bottom-0 h-16 md:hidden">
      <div className="btm-nav">
        <NavLink to="/">
          <button className="text-secondary">
            <HiOutlineHome size={25} />
          </button>
        </NavLink>
        <NavLink to="/tasks">
          <button className="text-secondary">
            <FaTasks size={20} />
          </button>
        </NavLink>
        <NavLink to="/stats">
          <button className="text-secondary">
            <BsFillPieChartFill size={25} />
          </button>
        </NavLink>
        <NavLink to="/about">
          <button className="text-secondary">
            <AiOutlineQuestionCircle size={30} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
