import Form from "../../layout/Form/Form";
import TaskList from "../../layout/TaskList/TaskList";
import { Task } from "../../../Types/Task";

type TasksProps = {
  taskList: Task[];
  handleAdd: (newTask: Task) => void;
};

const Tasks = ({ taskList, handleAdd }: TasksProps) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between pt-10 md:flex-row">
        <Form handleAdd={handleAdd} />
        <TaskList taskList={taskList} />
      </div>
    </div>
  );
};

export default Tasks;
