import { useContext, useState } from "react";
import AppContext from "../../../Context/AppContext";
import SingleTask from "../SingleTask/SingleTask";
import SingleCompletedTask from "../SingleCompletedTask/SingleCompletedTask";
import Button from "../Button/Button";

const TaskList = () => {
  const [displayNotCompletedTasks, setDisplayNotCompletedTasks] =
    useState(true);
  const [displayCompletedTasks, setDisplayCompletedTasks] = useState(false);

  const { taskList, completed } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">Task List</h2>
      <p className="text-md">
        Icons signify task categories, yellow for important tasks and green for
        regular ones
      </p>
      <div className="space-y-3 pt-3">
        <Button
          color="secondary"
          full="w-full"
          open={displayNotCompletedTasks}
          togglerFunction={setDisplayNotCompletedTasks}
          textContent={{
            open: "Show Tasks To Complete",
            close: "Hide Tasks To Complete",
          }}
        />
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
        <Button
          color="info"
          full="w-full"
          open={displayCompletedTasks}
          togglerFunction={setDisplayCompletedTasks}
          textContent={{
            open: "Show Completed Tasks",
            close: "Hide Completed Tasks",
          }}
        />
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
