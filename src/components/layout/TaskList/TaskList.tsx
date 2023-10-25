import { Task } from "../../../Types/Task";

type TaskListProps = {
  taskList: Task[];
};

const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <div>
      {taskList.map((task, index) => (
        <h2 key={index}>{task.task}</h2>
      ))}
    </div>
  );
};

export default TaskList;
