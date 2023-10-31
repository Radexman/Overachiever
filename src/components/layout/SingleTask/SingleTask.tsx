import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BiMessageAltEdit } from "react-icons/bi";
import Modal from "../Modal/Modal";
import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important, id, details } = task;
  return (
    <div
      className={`collapse collapse-arrow rounded-md p-0 text-left ${
        important ? "bg-primary text-primary-content" : "bg-secondary-content"
      }`}
    >
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{todo}</div>
      <div className="collapse-content">
        <div className="flex flex-col space-y-4">
          {details && <div>{details}</div>}
          <div className="btn-group items-center">
            <button className="btn btn-md">
              Complete
              <IoIosCheckmarkCircleOutline size={25} />
            </button>
            <button className="btn btn-md">
              Update
              <BiMessageAltEdit size={25} />
            </button>
            <button className="btn btn-md">
              <Modal id={id} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
