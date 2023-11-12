import { Task } from "../../../Types/TaskType";
import { useContext, useState, useEffect, ReactNode } from "react";
import AppContext from "../../../context/AppContext";
import { AiOutlineEdit as EditIcon } from "react-icons/ai";
import { MdDeleteForever as RemoveIcon } from "react-icons/md";
import { IoIosCheckmarkCircleOutline as CompleteIcon } from "react-icons/io";
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

const SingleTask = ({ task }: SingleTaskProps) => {
  const [icon, setIcon] = useState<ReactNode | null>();
  const { todo, category, important, details } = task;
  const { editTask, completeTask, removeTask } = useContext(AppContext);

  useEffect(() => {
    customizeIcon(category);
  }, []);

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
      className={`collapse-arrow collapse relative rounded-md border-[1px] text-left shadow-sm ${
        important ? "" : ""
      } border-secondary shadow-sm shadow-secondary`}
    >
      <input type="radio" name="my-accordion-2" />
      <div
        className={`collapse-title flex items-center gap-2 text-xl font-medium `}
      >
        <p className="">{icon}</p>
        {todo}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col space-y-4">
          {details && <div>{details}</div>}
          <div>
            <button
              onClick={() => completeTask(task)}
              className="btn btn-sm w-[33%] rounded-none rounded-l-md border-none hover:bg-green-600"
            >
              <CompleteIcon size={25} />
            </button>
            <button
              onClick={() => editTask(task)}
              className="btn btn-sm w-[33%] rounded-none border-none hover:bg-info"
            >
              <EditIcon size={25} />
            </button>
            <button
              onClick={() => removeTask(task.id)}
              className="btn btn-sm w-[33%] rounded-none rounded-r-md border-none hover:bg-red-600"
            >
              <RemoveIcon size={25} />
            </button>
          </div>
        </div>
      </div>
      {/* <CustomModal /> */}
    </div>
  );
};

export default SingleTask;
