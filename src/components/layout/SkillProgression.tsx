import React, { useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";

const LevelProgression = () => {
  const { userLevel, setUserLevel } = useContext(AppContext);

  useEffect(() => {
    setUserLevel({
      mainLevel: 1,
      experience: 0,
      requieredExperience: 10,
    });
  }, []);

  const skillName = "Your Skill"; // Replace with your skill name

  const handleExperienceGain = (amount: number) => {
    const newExperience = userLevel.experience + amount;

    if (newExperience >= userLevel.requieredExperience) {
      let mainLevel = userLevel.mainLevel + 1;
      let experience = (userLevel.experience = 0);
      let requieredExperience = userLevel.requieredExperience * 2;

      setUserLevel({ mainLevel, experience, requieredExperience });
    } else {
      let experience = userLevel.experience + amount;
      setUserLevel({ ...userLevel, experience });
    }
  };

  return (
    <div>
      <h2>
        {skillName} Level: {userLevel.mainLevel}
      </h2>
      <p>
        Experience: {userLevel.experience} / {userLevel.requieredExperience}
      </p>
      <button onClick={() => handleExperienceGain(2)}>Gain Experience</button>
      {/* Adjust the amount of experience gained as needed */}
    </div>
  );
};

export default LevelProgression;
