import { SingleTaskProps, categoryType } from "./SingleTask.type";
import { useContext, useState, useEffect, ReactNode } from "react";
import AppContext from "../../../Context/AppContext";
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

const SingleTask = ({ task }: SingleTaskProps) => {
  const [icon, setIcon] = useState<ReactNode | null>();
  const { todo, category, important, details } = task;
  const { editTask, completeTask, removeTask } = useContext(AppContext);

  useEffect(() => {
    customizeIcon(category);
  }, [task, category]);

  const customizeIcon = (category: categoryType): void => {
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
      className={`collapse collapse-arrow relative rounded-md border-[1px] border-secondary text-left shadow-sm shadow-secondary`}
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
          <div>
            <div
              data-tip="Complete Task"
              className="btn btn-sm tooltip w-[33%] rounded-none rounded-l-md border-r-0 border-t border-secondary hover:bg-green-600/70"
            >
              <button className="pt-[1px]" onClick={() => completeTask(task)}>
                <CompleteIcon size={25} />
              </button>
            </div>
            <div
              data-tip="Edit Task"
              className="btn btn-sm tooltip w-[33%] rounded-none border-l-0 border-r-0 border-t border-secondary hover:bg-info/70"
            >
              <button className="pt-[1px]" onClick={() => editTask(task)}>
                <EditIcon size={25} />
              </button>
            </div>
            <div
              data-tip="Remove Task"
              className="btn btn-sm tooltip w-[33%] rounded-none rounded-r-md border-l-0 border-t border-secondary hover:bg-red-600/80"
            >
              <button className="pt-[1px]" onClick={() => removeTask(task.id)}>
                <RemoveIcon size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
