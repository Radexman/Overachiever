export const getCurrentDay = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  const currentDay = daysOfWeek[date.getDay()];

  return currentDay;
};

// Chart calculations
// const tasksTotal = chartsData.taskList.length + chartsData.completed.length;
// const completedTasks = chartsData.completed.length;
// const tasksRemaining = tasksTotal - completedTasks;
// const completedPercentage = (completedTasks / tasksTotal) * 100;

// Regular tasks
// let regularTotalTasks = 0;
// let regularTasksCompleted = 0;

// Important Tasks Not Completed Amount
// let importantTotalTasks = 0;
// for (const task of chartsData.taskList) {
//   if (task.important) {
//     importantTotalTasks++;
//   } else {
//     regularTotalTasks++;
//   }
// }

// Important Tasks Completed Amount
// let importantTasksCompleted = 0;
// for (const task of chartsData.completed) {
//   if (task.important) {
//     importantTasksCompleted++;
//   } else {
//     regularTasksCompleted++;
//   }
// }

// Total Regular Tasks (Not Completed & Completed)
// const totalRegularTasks = regularTotalTasks + regularTasksCompleted;
// const totalRemainingRegularTasks = totalRegularTasks - regularTasksCompleted;

// Regular Tasks Percentage
// const regularTasksPercentage =
//   (regularTasksCompleted / totalRegularTasks) * 100;

// Total Important Tasks (Not Completed & Completed)
// const totalImportantTasks = importantTotalTasks + importantTasksCompleted;
// const totalRemainingImportantTasks =
//   totalImportantTasks - importantTasksCompleted;

// Important Tasks Percentage
// const importantTasksPercentage =
//   (importantTasksCompleted / totalImportantTasks) * 100;

// const chartCalculations = {
//   importantTasksPercentage,
//   importantTasksCompleted,
//   totalRemainingImportantTasks,
//   regularTasksPercentage,
//   regularTasksCompleted,
//   totalRemainingRegularTasks,
//   completedPercentage,
//   tasksRemaining,
//   completedTasks,
// };
