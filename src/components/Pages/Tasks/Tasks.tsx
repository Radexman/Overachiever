import Form from "../../layout/Form/Form";
import TaskList from "../../layout/TaskList/TaskList";
import { Task } from "../../../Types/TaskType";

type TasksProps = {
  taskList: Task[];
  handleAdd: (newTask: Task) => void;
};

const Tasks = ({ taskList, handleAdd }: TasksProps) => {
  return (
    <div className="container mx-auto text-center md:text-left">
      <div className="flex flex-col items-start justify-between gap-4 px-2 pt-10 md:flex-row">
        <Form handleAdd={handleAdd} />
        <TaskList taskList={taskList} />
      </div>
    </div>
  );
};

export default Tasks;
