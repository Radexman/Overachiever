import { FaClipboardList } from "react-icons/fa";
import { Task } from "../../../Types/TaskType";

type TrackerProps = {
  taskList: Task[];
};

const Tracker = ({ taskList }: TrackerProps) => {
  return (
    <div className="dropdown dropdown-hover indicator">
      <span className="badge indicator-item badge-secondary h-6 w-6 rounded-full  bg-primary font-bold">
        {taskList.length}
      </span>
      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary">
        <FaClipboardList size={30} />
      </div>
      <div className="menu dropdown-content rounded-box z-[1] mt-12 w-32 bg-base-100 p-2 font-bold text-primary-focus shadow-sm shadow-primary-focus">
        {taskList.length === 0
          ? "No tasks yet"
          : `You have ${taskList.length} ${
              taskList.length > 1 ? "tasks" : "task"
            }`}
      </div>
    </div>
  );
};

export default Tracker;
