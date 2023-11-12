import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import SingleTask from "../SingleTask/SingleTask";

const TaskList = () => {
  const [displayNotCompletedTasks, setdisplayNotCompletedTasks] =
    useState(true);

  const { taskList } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">Task List</h2>
      <p className="text-md">
        Important tasks have yellow outline while regular have green. Important
        tasks will be at the top of the list
      </p>
      <div>
        <button
          onClick={() => setdisplayNotCompletedTasks(!displayNotCompletedTasks)}
          className="btn btn-secondary btn-outline my-3 w-full"
        >
          {!displayNotCompletedTasks
            ? "Show Tasks to Complete"
            : "Hide Tasks to Complete"}
        </button>
        {/*  Tasks to complete */}
        <div
          className={`space-y-4 ${
            displayNotCompletedTasks ? "block" : "hidden"
          }`}
        >
          <div className="divider text-lg font-bold">Tasks To Complete</div>
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
