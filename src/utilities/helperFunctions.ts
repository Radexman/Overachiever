export const getCurrentDay = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const date = new Date();
  const currentDay = daysOfWeek[date.getDay()];

  return currentDay;
};
