import SingleTask from "../SingleTask/SingleTask";
import { Task } from "../../../Types/TaskType";

type TaskListProps = {
  taskList: Task[];
};

const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <div className="mx-auto mb-32 space-y-4 text-center md:mx-0 md:text-left">
      <h2 className="text-3xl font-bold">Task List</h2>
      <p className="text-lg">
        Tasks marked as important will be on the top of the list
      </p>
      <div className="space-y-4 rounded-lg bg-secondary p-8">
        {taskList.length === 0 ? (
          <h3 className="text-md font-bold text-primary-content">
            Task list is empty. Don't be shy, add something!
          </h3>
        ) : (
          taskList.map((task, id) => <SingleTask key={id} task={task} />)
        )}
        {taskList.map((task) => (
          <div
            key={task.id}
            className={`cursor-pointer rounded ${
              task.important ? "bg-primary-focus" : "bg-secondary-content"
            }`}
          >
            {task.todo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
