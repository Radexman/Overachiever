import { useContext } from "react";
import AppContext from "../../context/AppContext";
import RadialChart from "./RadialChart/RadialChart";

const Charts = () => {
  const { taskList, completed } = useContext(AppContext);

  const tasksTotal = taskList.length + completed.length;
  const completedTasks = completed.length;
  const tasksRemaining = tasksTotal - completedTasks;
  const completedPercentage = (completedTasks / tasksTotal) * 100;

  // Regular tasks
  let regularTotalTasks = 0;
  let regularTasksCompleted = 0;

  // Important Tasks Not Completed Amount
  let importantTotalTasks = 0;
  for (const task of taskList) {
    if (task.important) {
      importantTotalTasks++;
    } else {
      regularTotalTasks++;
    }
  }

  // Important Tasks Completed Amount
  let importantTasksCompleted = 0;
  for (const task of completed) {
    if (task.important) {
      importantTasksCompleted++;
    } else {
      regularTasksCompleted++;
    }
  }

  // Total Regular Tasks (Not Completed & Completed)
  const totalRegularTasks = regularTotalTasks + regularTasksCompleted;
  const totalRemainingRegularTasks = totalRegularTasks - regularTasksCompleted;

  // Regular Tasks Percentage
  const regularTasksPercentage =
    (regularTasksCompleted / totalRegularTasks) * 100;

  // Total Important Tasks (Not Completed & Completed)
  const totalImportantTasks = importantTotalTasks + importantTasksCompleted;
  const totalRemainingImportantTasks =
    totalImportantTasks - importantTasksCompleted;

  // Important Tasks Percentage
  const importantTasksPercentage =
    (importantTasksCompleted / totalImportantTasks) * 100;

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <div className="stats stats-vertical w-full bg-secondary-content shadow-md shadow-primary-focus lg:max-w-xl">
        {/* Single Stat Important */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={importantTasksPercentage}
              textColor="text-primary"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(importantTasksPercentage)
                ? "0"
                : importantTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title font-bold text-primary">
            Important Tasks Completed
          </div>
          <div className="stat-desc text-secondary">{`${totalRemainingImportantTasks} tasks remaining`}</div>
        </div>
        {/* Single Stat Regular */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={regularTasksPercentage}
              textColor="text-secondary-focus"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(regularTasksPercentage)
                ? "0"
                : regularTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title font-bold text-secondary-focus">
            Regular Tasks Completed
          </div>
          <div className="stat-desc text-secondary">{`${totalRemainingRegularTasks} tasks remaining`}</div>
        </div>
        {/* Single Stat All */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={completedPercentage}
              textColor="text-secondary"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(completedPercentage) ? "0" : completedPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title font-bold text-secondary">
            All Tasks Completed
          </div>
          <div className="stat-desc text-secondary">{`${tasksRemaining} tasks remaining`}</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
