import { useContext, useState } from "react";
import AppContext from "../../../Context/AppContext";
import SingleTask from "../SingleTask/SingleTask";
import SingleCompletedTask from "../SingleCompletedTask/SingleCompletedTask";

const TaskList = () => {
  const [displayNotCompletedTasks, setDisplayNotCompletedTasks] =
    useState(true);
  const [displayCompletedTasks, setDisplayCompletedTasks] = useState(false);

  const { taskList, completed } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">Task List</h2>
      <p className="text-md">
        Important tasks have yellow outline while regular have green. Important
        tasks will be at the top of the list
      </p>
      <div>
        <button
          onClick={() => setDisplayNotCompletedTasks(!displayNotCompletedTasks)}
          className="btn btn-secondary btn-outline my-3 w-full"
        >
          {!displayNotCompletedTasks
            ? "Show Tasks to Complete"
            : "Hide Tasks to Complete"}
        </button>
        {/*  Tasks to complete */}
        <div
          className={`mb-6 space-y-4 ${
            displayNotCompletedTasks ? "block" : "hidden"
          }`}
        >
          <div className="divider text-lg font-bold">Tasks To Complete</div>
          {taskList.length === 0 ? (
            <h3 className="text-md text-center font-bold">
              Task list is empty. Don't be shy, add something!
            </h3>
          ) : (
            taskList.map((task, id) => <SingleTask key={id} task={task} />)
          )}
        </div>
        <button
          onClick={() => setDisplayCompletedTasks(!displayCompletedTasks)}
          className="btn btn-info btn-outline my-3 w-full"
        >
          {!displayCompletedTasks
            ? "Show Completed Tasks"
            : "Hide Completed Tasks"}
        </button>
        <div
          className={`space-y-4 ${displayCompletedTasks ? "block" : "hidden"}`}
        >
          <div className="divider text-lg font-bold">Completed Tasks</div>
          {completed.length === 0 ? (
            <h3 className="text-md text-center font-bold">
              No tasks completed yet
            </h3>
          ) : (
            completed.map((task, id) => (
              <SingleCompletedTask key={id} task={task} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
