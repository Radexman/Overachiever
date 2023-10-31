import Modal from "../Modal/Modal";
import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important, id } = task;
  return (
    <div
      className={`collapse-arrow collapse ${
        important ? "bg-primary" : "bg-secondary-content"
      }`}
    >
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{todo}</div>
      <div className="collapse-content">
        <p>details</p>
      </div>
    </div>
  );
};

export default SingleTask;
