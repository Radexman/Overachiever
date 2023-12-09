import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import RadialChart from "../RadialChart/RadialChart";
import { getCurrentDay } from "../../../utilities/helperFunctions";

const Charts = () => {
  const { chartCalculations, theme } = useContext(AppContext);

  return (
    <div className="w-full space-y-3">
      <div className="space-y-3 p-4 text-center md:text-left">
        <h2 className="text-3xl font-bold">
          Your Progress On {getCurrentDay()}
        </h2>
        <p>
          In this section, you have the opportunity to preview your current
          progress. The yellow graph signifies crucial tasks, the green graph
          denotes regular tasks, and the blue graph encompasses all tasks
          scheduled for today
        </p>
      </div>
      <div
        className={`stats stats-vertical w-full lg:stats-horizontal ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0 "
        } shadow-sm shadow-primary-focus`}
      >
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
