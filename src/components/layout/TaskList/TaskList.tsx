import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import SingleTask from "../SingleTask/SingleTask";

const TaskList = () => {
  const { taskList } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">Task List</h2>
      <p className="text-md">
        Tasks marked as important will be on the top of the list
      </p>
      <div className="rounded-lg p-4 shadow-sm shadow-primary-focus">
        <div className="divider text-lg font-bold">Tasks To Complete</div>
        {/*  Tasks to complete */}
        <div className="space-y-4">
          {taskList.length === 0 ? (
            <h3 className="text-md font-bold text-primary-content">
              Task list is empty. Don't be shy, add something!
            </h3>
          ) : (
            taskList.map((task, id) => <SingleTask key={id} task={task} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
