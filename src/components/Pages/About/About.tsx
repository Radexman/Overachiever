import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto flex min-h-[90vh] items-center justify-center">
      <div className="flex max-w-lg flex-col items-center space-y-3 px-4 text-center">
        <FaExclamationTriangle size={150} />
        <h1 className="text-6xl">Work in Progress</h1>
        <p className="text-lg">
          Sorry this section of an app is still in developement. Come back
          later.
        </p>
        <Link to="/">
          <button className="btn btn-secondary btn-outline btn-wide">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
