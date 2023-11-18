import { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import { getCurrentDay } from "../../../utilities/helperFunctions";

const FinalRaport = () => {
  const { theme, displayReport, closeReport } = useContext(AppContext);

  return (
    <div
      className={`${
        !displayReport ? "hidden" : "block"
      } absolute left-0 top-7 h-full w-full rounded-lg bg-secondary-content p-4 shadow-sm shadow-primary-focus ${
        theme === "emerald" ? "shadow-2xl shadow-slate-500" : "border-0"
      } shadow-primary-focus`}
    >
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">{getCurrentDay()} Report</h2>
        <button onClick={closeReport} className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FinalRaport;
