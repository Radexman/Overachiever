import { Task } from "../../../Types/TaskType";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { AiOutlineEdit as EditIcon } from "react-icons/ai";
import { MdDeleteForever as RemoveIcon } from "react-icons/md";
import { IoIosCheckmarkCircleOutline as CompleteIcon } from "react-icons/io";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important, details } = task;
  const { editTask, completeTask, removeTask } = useContext(AppContext);

  return (
    <div
      className={`collapse collapse-arrow relative rounded-md text-left shadow-md ${
        important
          ? "border-warning shadow-warning"
          : "border-success shadow-success"
      }`}
    >
      <input type="radio" name="my-accordion-2" />
      <div
        className={`collapse-title text-xl font-medium ${
          important ? "text-warning" : "text-success"
        }`}
      >
        {todo}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col space-y-4">
          {details && <div>{details}</div>}
          <div>
            <button
              onClick={() => completeTask(task)}
              className="btn btn-sm w-[33%] rounded-none rounded-l-md border-none hover:bg-green-600"
            >
              <CompleteIcon size={25} />
            </button>
            <button
              onClick={() => editTask(task)}
              className="btn btn-sm w-[33%] rounded-none border-none hover:bg-primary-focus"
            >
              <EditIcon size={25} />
            </button>
            <button
              onClick={() => removeTask(task.id)}
              className="btn btn-sm w-[33%] rounded-none rounded-r-md border-none hover:bg-red-600"
            >
              <RemoveIcon size={25} />
            </button>
          </div>
        </div>
      </div>
      {/* <CustomModal /> */}
    </div>
  );
};

export default SingleTask;
