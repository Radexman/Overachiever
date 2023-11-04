import { FaChartPie } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import RadialChart from "../../layout/RadialChart/RadialChart";

const Stats = () => {
  const { taskList, completed } = useContext(AppContext);

  const tasksTotal = taskList.length + completed.length;
  const completedTasks = completed.length;
  const tasksRemaining = tasksTotal - completedTasks;
  const completedPercentage = (completedTasks / tasksTotal) * 100;

  return (
    <div className="container mx-auto pt-10">
      {/* Profile Section */}
      <h1 className="text-3xl font-bold">Statistics Section</h1>
      <div className="flex items-center justify-between">
        <div>
          In this section you can view you current progress and other usefull
          informations
        </div>
        {/* Statistics Section */}
        <div className="stats bg-secondary-content shadow-md shadow-primary-focus">
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
