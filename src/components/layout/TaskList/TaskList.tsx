type TaskListProps = {
  taskList: {
    id: number;
    task: string;
    important: boolean;
  }[];
};

const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <div>
      {taskList.map((task) => (
        <h2 key={task.id}>{task.task}</h2>
      ))}
    </div>
  );
};

export default TaskList;
