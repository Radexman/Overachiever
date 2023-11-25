import { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import Profile from "../../layout/Profile/Profile";
import Skills from "../../layout/Skills/Skills";
import Charts from "../../layout/Charts/Charts";
import FinalRaport from "../../layout/FinalRaport/FinalRaport";

const Stats = () => {
  const { displayReport } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-3 md:py-10">
      <div className="flex flex-col items-start gap-8">
        <div className={displayReport ? "hidden" : "block"}>
          <div className="mb-8 flex flex-col gap-8 lg:flex-row">
            <Profile />
            <Skills />
          </div>
          <Charts />
        </div>
      </div>
      <FinalRaport />
    </div>
  );
};

export default Stats;
