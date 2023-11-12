import { useContext } from "react";
import AppContext from "../../context/AppContext";
import RadialChart from "./RadialChart/RadialChart";

const Charts = () => {
  const { chartCalculations } = useContext(AppContext);

  return (
    <div className="w-full space-y-3">
      <div className="stats stats-vertical w-full bg-secondary-content shadow-md shadow-primary-focus lg:stats-horizontal">
        {/* Single Stat Important */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <RadialChart
              percentage={chartCalculations.importantTasksPercentage}
              textColor="text-info"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.importantTasksPercentage)
                ? "0"
                : chartCalculations.importantTasksPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-info">Important Tasks Done</div>
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
              textColor="text-warning"
            />
          </div>
          <div className="stat-value">
            {`${
              isNaN(chartCalculations.completedPercentage)
                ? "0"
                : chartCalculations.completedPercentage.toFixed()
            }%`}
          </div>
          <div className="stat-title text-warning">All Tasks Done</div>
          <div className="stat-desc text-secondary">{`${chartCalculations.tasksRemaining} tasks remaining`}</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
