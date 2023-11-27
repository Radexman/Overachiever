import React, { useState } from "react";

const LevelProgression = () => {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [requiredExperience, setRequiredExperience] = useState(100); // Initial required experience

  const skillName = "Your Skill"; // Replace with your skill name

  const handleExperienceGain = (amount: number) => {
    const newExperience = experience + amount;

    if (newExperience >= requiredExperience) {
      setLevel(level + 1);
      setExperience(0);
      setRequiredExperience(requiredExperience * 2); // Increase required experience for the next level
    } else {
      setExperience(newExperience);
    }
  };

  return (
    <div>
      <h2>
        {skillName} Level: {level}
      </h2>
      <p>
        Experience: {experience} / {requiredExperience}
      </p>
      <button onClick={() => handleExperienceGain(50)}>Gain Experience</button>
      {/* Adjust the amount of experience gained as needed */}
    </div>
  );
};

export default LevelProgression;
