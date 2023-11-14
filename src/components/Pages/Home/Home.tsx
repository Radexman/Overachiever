import { Link } from "react-router-dom";
import imageTwo from "../../../assets/hero-img.svg";

const Home = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageTwo})`,
      }}
    >
      <div className="flex items-center justify-start pt-0 md:pt-36">
        <div className="itmes-center ml-0 flex h-screen w-full max-w-2xl flex-col justify-center rounded-none bg-secondary-content/80 p-5 text-center md:ml-16 md:h-auto md:rounded-3xl md:bg-secondary-content/90 md:text-left">
          <h1 className="mb-5 text-5xl font-bold xl:text-7xl">
            Achieve Your Daily Tasks With Ease
          </h1>
          <p className="mb-5 text-xl">
            Create, track and update your daily tasks and chores. Never again
            miss a meeting or something that you ought to do. View your current
            progress and get notified about upcoming assignments.
          </p>
          <Link to="/tasks">
            <button className="btn btn-secondary btn-outline btn-wide my-4">
              Create New Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
