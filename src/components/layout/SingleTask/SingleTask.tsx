import { MdDeleteForever } from "react-icons/md";
import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
  handleRemove: (id: string) => void;
};

const SingleTask = ({ task, handleRemove }: SingleTaskProps) => {
  const { todo, important, id } = task;
  return (
    <div
      className={`flex items-center justify-between rounded-lg  ${
        important ? "bg-primary-focus" : "bg-secondary-content"
      }`}
    >
      <p className="cursor-pointer p-4 text-left text-lg font-bold">{todo}</p>
      <div className="pr-2">
        <button onClick={() => handleRemove(id)}>
          <MdDeleteForever size={30} />
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
