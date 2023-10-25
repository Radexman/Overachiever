import { useState } from "react";
import Form from "../../layout/Form/Form";
import TaskList from "../../layout/TaskList/TaskList";

const Tasks = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      task: "Clean bathroom",
      important: true,
    },
    {
      id: 2,
      task: "Clean Kitchen",
      important: true,
    },
    {
      id: 3,
      task: "Buy groceries",
      important: false,
    },
  ]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between pt-10 md:flex-row">
        <Form />
        <TaskList taskList={taskList} />
      </div>
    </div>
  );
};

export default Tasks;
