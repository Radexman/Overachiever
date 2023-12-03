import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="container mx-auto flex h-[90vh] items-center justify-center text-center">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-8 text-8xl font-bold">Oops!</h1>
            <p className="mb-8 text-5xl">404 - Page not found!</p>
            <Link
              to="/"
              className="btn btn-secondary btn-outline btn-wide text-xl"
            >
              <FaHome />
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
