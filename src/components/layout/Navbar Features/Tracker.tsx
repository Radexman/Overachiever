import { FaClipboardList } from "react-icons/fa";

const Tracker = () => {
  return (
    <div className="dropdown dropdown-hover indicator">
      <span className="badge indicator-item badge-secondary h-6 w-6 rounded-full  bg-primary font-bold">
        3
      </span>
      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary">
        <FaClipboardList size={30} />
      </div>
      <div className="menu dropdown-content rounded-box z-[1] mr-6 mt-12 w-32 bg-base-100 p-2 font-bold text-primary-focus shadow-sm shadow-primary-focus">
        You have 3 tasks
      </div>
    </div>
  );
};

export default Tracker;
