import Profile from "../../layout/Profile/Profile";
import Skills from "../../layout/Skills/Skills";
import Charts from "../../layout/Charts";

const Stats = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Profile />
          <Skills />
        </div>
        <Charts />
      </div>
    </div>
  );
};

export default Stats;
