import { Link } from "react-router-dom";
import image from "../../../assets/illustration-sign-up-desktop.svg";

const Home = () => {
  return (
    <div className="flex justify-start px-8 py-36">
      <img src={image} alt="" className="h-[60vh]" />

      <div className="ml-0 max-w-2xl px-4 text-center md:ml-16 md:text-left">
        <h1 className="mb-5 text-5xl font-bold md:text-7xl">
          Achieve Your Daily Tasks With Ease
        </h1>
        <p className="mb-5 text-lg">
          Create, track and update your daily tasks and chores. Never again miss
          a meeting or something that you ought to do. View your current
          progress and get notified about upcoming assignments.
        </p>
        <Link to="/tasks">
          <button className="btn btn-secondary btn-outline btn-wide my-4">
            Create New Task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
