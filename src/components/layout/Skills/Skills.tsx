import { IoIosWarning } from "react-icons/io";
import { useState, useContext, useEffect } from "react";
import AppContext from "../../../Context/AppContext";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

const Skills = () => {
  const [displayAllSkills, setDisplayAllSkills] = useState(false);

  const { userLevel, setUserLevel, handleExperienceGain } =
    useContext(AppContext);

  useEffect(() => {
    setUserLevel({
      mainLevel: 1,
      experience: 0,
      requieredExperience: 10,
    });
  }, []);

  return (
    <div className="w-full space-y-4 rounded-lg p-4 lg:w-1/2">
      <h2 className="text-3xl font-bold">Skills Section</h2>
      <p>
        This section allows you to assess your performance in individual skills
        and your overall profile level
      </p>
      <p className="text-xl font-bold">Main Level: {userLevel.mainLevel}</p>
      <p>
        Experience: {userLevel.experience} / {userLevel.requieredExperience}
      </p>
      <ProgressBar
        bgColor="progress-info"
        completed={userLevel.experience}
        max={userLevel.requieredExperience}
      />
      <button onClick={() => handleExperienceGain(2)}>Gain Experience</button>
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
          <IoIosWarning size={80} />
          <p>This section of an app is still in development, come back later</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
