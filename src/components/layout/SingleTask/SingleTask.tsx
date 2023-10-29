import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important } = task;
  return (
    <div
      className={` rounded-lg  ${
        important ? "bg-primary-focus" : "bg-secondary-content"
      }`}
    >
      <p className="cursor-pointer p-4 text-left text-lg font-bold">{todo}</p>
    </div>
  );
};

export default SingleTask;
