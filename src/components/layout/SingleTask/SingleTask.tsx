import { Task } from "../../../Types/TaskType";
import CompleteModal from "../Modal/CompleteModal";
import EditModal from "../Modal/EditModal";
import RemoveModal from "../Modal/RemoveModal";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important, details } = task;

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
          <div>
            <CompleteModal task={task} />
            <EditModal task={task} />
            <RemoveModal id={task.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
