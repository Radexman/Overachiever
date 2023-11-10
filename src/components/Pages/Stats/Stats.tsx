import Profile from "../../layout/Profile/Profile";
import Charts from "../../layout/Charts";

const Stats = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-20">
        <Profile />
        <Charts />
      </div>
    </div>
  );
};

export default Stats;
