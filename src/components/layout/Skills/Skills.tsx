import { useState } from "react";
import Button from "../Button/Button";

const Skills = () => {
  const [displayAllSkills, setDisplayAllSkills] = useState(false);

  return (
    <div className="w-full space-y-4 rounded-lg p-4 lg:w-1/2">
      <h2 className="text-3xl font-bold">Skills Section</h2>
      <p>
        In this section you can check how well you're doing in each skill as
        well as in your global profile level.
      </p>
      <h3 className="text-xl font-bold">Main Level: 34</h3>
      <progress
        className="progress progress-primary h-5 w-full"
        value={10}
        max="100"
      ></progress>
      <Button
        color="primary"
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
        <h3 className="text-3xl font-bold">More Skills</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
          adipisci porro, fugit placeat impedit harum hic sit accusantium ab
          expedita, facilis consequuntur quibusdam sapiente qui.
        </p>
      </div>
    </div>
  );
};

export default Skills;
