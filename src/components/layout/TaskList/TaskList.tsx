import { Task } from "../../../Types/Task";

type TaskListProps = {
  taskList: Task[];
};

const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <div className="mb-32 space-y-4 text-center md:text-left">
      <h2 className="text-3xl font-bold">Task List</h2>
      <p>Tasks marked as important will be on the top of the list</p>
      <div className="space-y-4 rounded-lg bg-secondary p-4">
        {taskList.map((task, index) => (
          <h2 className="bg-secondary-focus p-4" key={index}>
            {task.task}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
