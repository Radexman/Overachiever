import { IoIosWarning } from "react-icons/io";
import { useState, useContext } from "react";
import AppContext from "../../../Context/AppContext";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

const Skills = () => {
  const [displayAllSkills, setDisplayAllSkills] = useState(false);
  const { userLevel } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 rounded-lg p-4 lg:w-1/2">
      <h2 className="text-center text-3xl font-bold md:text-left">
        Skills Section
      </h2>
      <p className="text-center md:text-left">
        This section allows you to assess your performance and your overall
        profile level
      </p>
      <p className="text-xl font-bold">Main Level {userLevel.mainLevel}</p>
      <p>
        Progress {userLevel.experience} / {userLevel.requieredExperience}
      </p>
      <ProgressBar
        bgColor="progress-secondary"
        completed={userLevel.experience}
        max={userLevel.requieredExperience}
      />
      <Button
        color="info"
        size="sm"
        open={displayAllSkills}
        togglerFunction={setDisplayAllSkills}
        textContent={{
          open: "Show All Skills",
          close: "Hide All Skills",
        }}
      />
      <div className={displayAllSkills ? "block" : "hidden"}>
        <div className="divider"></div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <IoIosWarning size={50} />
          <p>
            This section of an app is still in development, come back later.
            This feature will contain more skill bars for each category
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
