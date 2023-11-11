import { useContext } from "react";
import AppContext from "../../context/AppContext";
import RadialChart from "./RadialChart/RadialChart";

const Charts = () => {
  const { chartCalculations } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <div className="stats stats-vertical w-full bg-secondary-content shadow-md shadow-primary-focus lg:max-w-xl">
        {/* Single Stat Important */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.importantTasksPercentage}
              textColor="text-primary"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.importantTasksPercentage)
                ? "0"
                : chartCalculations.importantTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-sm text-primary">
            Important Tasks Done
          </div>
          <div className="stat-desc text-secondary">{`${chartCalculations.totalRemainingImportantTasks} tasks remaining`}</div>
        </div>
        {/* Single Stat Regular */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.regularTasksPercentage}
              textColor="text-secondary-focus"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.regularTasksPercentage)
                ? "0"
                : chartCalculations.regularTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-sm text-secondary-focus">
            Regular Tasks Done
          </div>
          <div className="stat-desc text-secondary">{`${chartCalculations.totalRemainingRegularTasks} tasks remaining`}</div>
        </div>
        {/* Single Stat All */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.completedPercentage}
              textColor="text-secondary"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.completedPercentage)
                ? "0"
                : chartCalculations.completedPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-sm text-secondary">
            All Tasks Done
          </div>
          <div className="stat-desc text-secondary">{`${chartCalculations.tasksRemaining} tasks remaining`}</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
