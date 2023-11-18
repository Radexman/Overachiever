import { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import RadialChart from "../RadialChart/RadialChart";

const Charts = () => {
  const { chartCalculations, theme } = useContext(AppContext);

  return (
    <div
      className={`w-full space-y-3 rounded-lg shadow-sm shadow-primary-focus ${
        theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
      }`}
    >
      <div className=" space-y-3 p-4">
        <h2 className="text-3xl font-bold">Your Progress Today</h2>
        <p>
          In this section you can preview how well are you doing today. Yellow
          graph represents important tasks, green regular and blue all tasks for
          today.
        </p>
      </div>
      <div className={`stats stats-vertical w-full lg:stats-horizontal `}>
        {/* Single Stat Important */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.importantTasksPercentage}
              textColor="text-warning"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.importantTasksPercentage)
                ? "0"
                : chartCalculations.importantTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-warning">Important Tasks Done</div>
          <div className="stat-desc text-secondary">{`${chartCalculations.totalRemainingImportantTasks} tasks remaining`}</div>
        </div>
        {/* Single Stat Regular */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.regularTasksPercentage}
              textColor="text-success"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.regularTasksPercentage)
                ? "0"
                : chartCalculations.regularTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-success">Regular Tasks Done</div>
          <div className="stat-desc text-secondary">{`${chartCalculations.totalRemainingRegularTasks} tasks remaining`}</div>
        </div>
        {/* Single Stat All */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.completedPercentage}
              textColor="text-info"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.completedPercentage)
                ? "0"
                : chartCalculations.completedPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-info">All Tasks Done</div>
          <div className="stat-desc text-secondary">{`${chartCalculations.tasksRemaining} tasks remaining`}</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
