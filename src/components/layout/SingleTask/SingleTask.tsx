import ButtonModal from "../Modal/ButtonModal";
import { Task } from "../../../Types/TaskType";

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
          <div className="btn-group btn-group-horizontal">
            <ButtonModal actionType="complete" task={task} />
            <ButtonModal actionType="edit" task={task} />
            <ButtonModal actionType="remove" task={task} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
