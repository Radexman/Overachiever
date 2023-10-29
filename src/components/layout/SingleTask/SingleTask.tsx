import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
};

const SingleTask = ({ task }: SingleTaskProps) => {
  const { todo, important } = task;
  return (
    <div>
      <h3>{todo}</h3>
    </div>
  );
};

export default SingleTask;
