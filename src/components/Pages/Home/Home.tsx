import { Link } from "react-router-dom";
import imageTwo from "../../../assets/hero-img.svg";

const Home = () => {
  return (
    <div
      data-testid="home"
      className="min-h-[80vh] bg-cover bg-center md:min-h-[90vh]"
      style={{
        backgroundImage: `url(${imageTwo})`,
      }}
    >
      <div className="flex justify-start pt-0 md:pt-36">
        <div className="ml-0 min-h-[80vh] w-full max-w-2xl rounded-none bg-secondary-content/80 px-3 pt-8 text-center md:ml-16 md:h-auto md:min-h-min md:rounded-3xl md:bg-secondary-content/90 md:p-5 md:pt-5 md:text-left">
          <h1 className="mb-5 text-5xl font-bold xl:text-7xl">
            Achieve Your Daily Tasks With Ease
          </h1>
          <p className="mb-5 text-xl">
            Elevate your performance with detailed progress reports. Track your
            success, customize your tasks, and unleash your potential. Dive into
            detailed performance insights and redefine your achievement game!
          </p>
          <Link to="/tasks">
            <button className="btn btn-secondary btn-outline btn-wide my-4">
              Start Overachieving
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
