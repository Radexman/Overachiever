import { Task } from "../../../Types/TaskType";
import { useState, useEffect, ReactNode } from "react";
import { MdWorkOutline as WorkIcon } from "react-icons/md";
import { FaFlask as StudyIcon } from "react-icons/fa";
import {
  PiBarbellBold as WorkoutIcon,
  PiCookingPotBold as CookingIcon,
} from "react-icons/pi";
import {
  BsFillDice6Fill as HobbyIcon,
  BsFillHouseHeartFill as HousekeepingIcon,
} from "react-icons/bs";

type SingleTaskProps = {
  task: Task;
};

const SingleCompletedTask = ({ task }: SingleTaskProps) => {
  const [icon, setIcon] = useState<ReactNode | null>();
  const { todo, category, important, details } = task;

  useEffect(() => {
    customizeIcon(category);
  }, [task]);

  const customizeIcon = (category: string | undefined): void => {
    switch (category) {
      case "Work":
        setIcon(<WorkIcon />);
        break;
      case "Study":
        setIcon(<StudyIcon />);
        break;
      case "Workout":
        setIcon(<WorkoutIcon />);
        break;
      case "Cooking":
        setIcon(<CookingIcon />);
        break;
      case "Hobby":
        setIcon(<HobbyIcon />);
        break;
      case "Housekeeping":
        setIcon(<HousekeepingIcon />);
        break;
      default:
        setIcon(null);
    }
  };

  return (
    <div
      className={`collapse-arrow collapse relative rounded-md border-[1px] border-secondary text-left shadow-sm shadow-secondary`}
    >
      <input type="radio" name="my-accordion-2" />
      <div
        className={`collapse-title flex items-center gap-2 text-xl font-medium `}
      >
        <p className={important ? "text-warning" : "text-success"}>{icon}</p>
        {todo}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col space-y-4">
          {details && <div>{details}</div>}
        </div>
      </div>
    </div>
  );
};

export default SingleCompletedTask;
