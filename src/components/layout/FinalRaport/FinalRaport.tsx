import { useContext } from "react";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { AiOutlineThunderbolt as IconImportant } from "react-icons/ai";
import { FaListUl as IconRegular } from "react-icons/fa";
import { IoCheckmarkCircleOutline as IconCheckmark } from "react-icons/io5";
import { FaRegCircleXmark as IconXmark } from "react-icons/fa6";
import { FaRegCalendarCheck as IconAll } from "react-icons/fa";
import AppContext from "../../../Context/AppContext";
import { getCurrentDay } from "../../../utilities/helperFunctions";
import RadialChart from "../RadialChart/RadialChart";
import SingleCompletedTask from "../SingleCompletedTask/SingleCompletedTask";

const FinalRaport = () => {
  const {
    theme,
    displayReport,
    chartCalculations,
    user,
    completed,
    finishDay,
    yesterdayTasks,
  } = useContext(AppContext);

  const dailyAllRatio =
    ((chartCalculations.completedTasks - yesterdayTasks.length) /
      yesterdayTasks.length) *
    100;

  const dailyRegularRatio =
    ((chartCalculations.regularTasksCompleted -
      chartCalculations.yesterdayRegularTasks) /
      chartCalculations.yesterdayRegularTasks) *
    100;

  const dailyImportantRatio =
    ((chartCalculations.importantTasksCompleted -
      chartCalculations.yesterdayImportantTasks) /
      chartCalculations.yesterdayImportantTasks) *
    100;

  return (
    <div className={`${!displayReport ? "hidden" : "block"} space-y-8`}>
      <div className="flex flex-col items-center justify-center space-y-4 pb-12 text-center">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-secondary md:w-40">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="Users avatar"
                className="rounded-full"
              />
            ) : (
              <div className="flex justify-center">
                <UserIcon size={120} />
              </div>
            )}
          </div>
        </div>
        <h2 className="text-4xl font-semibold md:text-5xl">
          Good Job {user.username}!
        </h2>
        <p className="text-lg md:text-2xl">
          You have sucesfully completed {getCurrentDay()} <br />
          Here is how it went
        </p>
        <p className="px-6 py-5 text-sm">
          You can exit report back to your profile by clicking button at the end
          of this report
        </p>
      </div>
      <div
        className={`w-full rounded-lg shadow-none md:shadow-sm md:shadow-primary-focus ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        }`}
      >
        <div className="px-2 py-2 text-center md:p-4 lg:text-left">
          <h3 className="mb-3 text-2xl font-bold md:mb-0 md:text-3xl">
            Number Of Completed Tasks
          </h3>
          <p>
            Number of important and ordinary tasks completed and all tasks
            summed up
          </p>
        </div>
        <div className="stats stats-vertical w-full lg:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-warning">
              <IconImportant size={40} />
            </div>
            <div className="stat-value">
              {chartCalculations.importantTasksCompleted}
            </div>
            <div className="stat-title text-warning">Important Tasks</div>
            <div
              className={`stat-desc ${
                dailyImportantRatio > 0 ? "text-green-400" : "text-red-400"
              } ${yesterdayTasks.length || "hidden"}`}
            >
              {dailyImportantRatio.toFixed()}%{" "}
              {dailyImportantRatio > 0
                ? "more than yesterday"
                : dailyImportantRatio === 0
                ? "same as yesterday"
                : "less than yesterday"}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-success">
              <IconRegular size={40} />
            </div>
            <div className="stat-value">
              {chartCalculations.regularTasksCompleted}
            </div>
            <div className="stat-title text-success">Regular Tasks</div>
            <div
              className={`stat-desc ${
                dailyRegularRatio > 0 ? "text-green-400" : "text-red-400"
              } ${yesterdayTasks.length || "hidden"}`}
            >
              {dailyRegularRatio.toFixed()}%{" "}
              {!isFinite(dailyRegularRatio)
                ? ""
                : dailyRegularRatio > 0
                ? "more than yesterday"
                : dailyRegularRatio === 0
                ? "same as yesterday"
                : "less than yesterday"}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-info">
              <IconAll size={40} />
            </div>
            <div className="stat-value">{chartCalculations.completedTasks}</div>
            <div className="stat-title text-info">All Tasks</div>
            <div
              className={`stat-desc ${
                dailyAllRatio > 0 ? "text-green-400" : "text-red-400"
              } ${yesterdayTasks.length || "hidden"}`}
            >
              {dailyAllRatio.toFixed()}%{" "}
              {dailyAllRatio > 0
                ? "more than yesterday"
                : dailyAllRatio === 0
                ? "same as yesterday"
                : "less than yesterday"}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full rounded-lg shadow-none md:shadow-sm md:shadow-primary-focus ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        }`}
      >
        <div className="px-2 py-2 text-center md:p-4 lg:text-left">
          <h3 className="mb-3 text-2xl font-bold md:mb-0 md:text-3xl">
            Percentage Graphs
          </h3>
          <p>
            Each graph in a given category shows the number of tasks you have
            completed, expressed as a percentage. You can also see how much
            better or worse you did compared to yesterday
          </p>
        </div>
        <div className={`stats stats-vertical w-full lg:stats-horizontal `}>
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
          </div>
        </div>
      </div>
      <div
        className={`w-full space-y-3 rounded-lg shadow-none md:shadow-sm md:shadow-primary-focus ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        }`}
      >
        <div className="px-2 py-2 text-center md:p-4 lg:text-left">
          <h3 className="mb-3 text-2xl font-bold md:mb-0 md:text-3xl">
            Tasks Completed
          </h3>
          <p>
            List of all tasks, details and categories that you completed today
          </p>
        </div>
        <table className="table-zebra hidden sm:table">
          <thead>
            <tr>
              <th></th>
              <th>Task</th>
              <th>Category</th>
              <th>Details</th>
              <th>Important</th>
            </tr>
          </thead>
          <tbody>
            {completed.map((task, index) => {
              const { todo, category, details, important } = task;
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{todo}</td>
                  <td>{category}</td>
                  <td>{details ? details : "This task has no details"}</td>
                  <td>
                    <div
                      className={`flex items-center ${
                        important ? "text-warning" : "text-success"
                      }`}
                    >
                      {important ? (
                        <IconCheckmark size={23} />
                      ) : (
                        <IconXmark size={20} />
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="block space-y-3 p-2 sm:hidden">
          {completed.map((task, id) => (
            <SingleCompletedTask key={id} task={task} />
          ))}
        </div>
      </div>
      <button
        onClick={finishDay}
        className="btn btn-secondary btn-outline w-full"
      >
        Close Report
      </button>
    </div>
  );
};

export default FinalRaport;
