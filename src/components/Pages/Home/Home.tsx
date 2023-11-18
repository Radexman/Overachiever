import { Link } from "react-router-dom";
import imageTwo from "../../../assets/hero-img.svg";

const Home = () => {
  return (
    <div
      data-testid="home"
      className="bg-cover bg-center md:min-h-[90vh]"
      style={{
        backgroundImage: `url(${imageTwo})`,
      }}
    >
      <div className="flex justify-start pt-0 md:pt-36">
        <div className="ml-0 h-screen w-full max-w-2xl rounded-none bg-secondary-content/80 px-7 pt-20 text-center md:ml-16 md:h-auto md:rounded-3xl md:bg-secondary-content/90 md:p-5 md:pt-5 md:text-left">
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
