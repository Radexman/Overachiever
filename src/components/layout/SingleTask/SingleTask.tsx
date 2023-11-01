import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiMessageAltEdit } from "react-icons/bi";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import Modal from "../Modal/Modal";
import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important, id, details } = task;

  const { editTask, completeTask } = useContext(AppContext);

  return (
    <div
      className={`collapse-arrow collapse rounded-md p-0 text-left ${
        important ? "bg-primary text-primary-content" : "bg-secondary-content"
      }`}
    >
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{todo}</div>
      <div className="collapse-content">
        <div className="flex flex-col space-y-4">
          {details && <div>{details}</div>}
          <div className="btn-group">
            <button onClick={() => completeTask(task)} className="btn w-[33%]">
              Complete
              <IoIosCheckmarkCircleOutline size={25} />
            </button>
            <button onClick={() => editTask(task)} className="btn w-[33%]">
              Update
              <BiMessageAltEdit size={25} />
            </button>
            <button className="btn w-[33%]">
              <Modal id={id} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
