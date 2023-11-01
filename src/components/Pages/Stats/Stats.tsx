import { useContext, CSSProperties } from "react";
import AppContext from "../../../context/AppContext";
import RadialChart from "../../layout/RadialChart/RadialChart";

const Stats = () => {
  const { taskList, completed } = useContext(AppContext);

  const tasksTotal = taskList.length + completed.length;
  const completedTasks = completed.length;
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
        <div>
          <RadialChart
            percentage={completedPercentage}
            textColor="text-secondary-focus"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
