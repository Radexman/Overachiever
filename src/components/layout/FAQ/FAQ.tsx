import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const FAQ = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <div
        className={`join join-vertical w-full shadow-sm shadow-primary-focus ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        }`}
      >
        <div className="collapse join-item collapse-arrow border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse-arrow collapse join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse-arrow collapse join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
