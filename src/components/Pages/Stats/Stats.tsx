// import { FaChartPie } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import RadialChart from "../../layout/RadialChart/RadialChart";
import Profile from "../../layout/Profile/Profile";

const Stats = () => {
  const { taskList, completed } = useContext(AppContext);

  const tasksTotal = taskList.length + completed.length;
  const completedTasks = completed.length;
  const tasksRemaining = tasksTotal - completedTasks;
  const completedPercentage = (completedTasks / tasksTotal) * 100;

  // Important Tasks Calculations
  let importantTotalTasks = 0;
  for (const task of taskList) {
    if (task.important) {
      importantTotalTasks++;
    }
  }

  // Important Tasks Completed
  let importantTasksCompleted = 0;
  for (const task of completed) {
    if (task.important) {
      importantTasksCompleted++;
    }
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Profile Section */}
      <Profile />
      {`Important tasks ${importantTotalTasks}, Important tasks completed ${importantTasksCompleted}`}
      <div className="flex items-center justify-center">
        {/* Statistics Section */}
        <div className="stats stats-vertical w-full bg-secondary-content shadow-md shadow-primary-focus lg:stats-horizontal lg:w-auto">
          {/* Single Stat Important */}
          <div className="stat">
            <div className="stat-figure text-primary">
              <RadialChart
                percentage={completedPercentage}
                textColor="text-secondary-focus"
              />
            </div>
            <div className="stat-value">
              {`${
                isNaN(completedPercentage) ? "0" : completedPercentage.toFixed()
              }%`}
            </div>
            <div className="stat-title">All Tasks Completed</div>
            <div className="stat-desc text-secondary">{`${tasksRemaining} tasks remaining`}</div>
          </div>
          {/* Single Stat Regular */}
          <div className="stat">
            <div className="stat-figure text-primary">
              <RadialChart
                percentage={completedPercentage}
                textColor="text-secondary-focus"
              />
            </div>
            <div className="stat-value">
              {`${
                isNaN(completedPercentage) ? "0" : completedPercentage.toFixed()
              }%`}
            </div>
            <div className="stat-title">All Tasks Completed</div>
            <div className="stat-desc text-secondary">{`${tasksRemaining} tasks remaining`}</div>
          </div>
          {/* Single Stat All */}

          <div className="stat">
            <div className="stat-figure text-primary">
              <RadialChart
                percentage={completedPercentage}
                textColor="text-secondary-focus"
              />
            </div>
            <div className="stat-value">
              {`${
                isNaN(completedPercentage) ? "0" : completedPercentage.toFixed()
              }%`}
            </div>
            <div className="stat-title">All Tasks Completed</div>
            <div className="stat-desc text-secondary">{`${tasksRemaining} tasks remaining`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
