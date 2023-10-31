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
      className={`collapse collapse-arrow rounded-md text-left ${
        important ? "bg-primary text-primary-content" : "bg-secondary-content"
      }`}
    >
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{todo}</div>
      <div className="collapse-content">
        <div className="flex flex-col">
          {details && <div>{details}</div>}
          <div className="start flex justify-end">
            <IoIosCheckmarkCircleOutline size={25} />
            <BiMessageAltEdit size={25} />
            <Modal id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
