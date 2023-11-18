import { useContext } from "react";
import AppContext from "../../../Context/AppContext";

const FAQ = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <p>If you have any doubts, check these frequently asked questions</p>
      <div
        className={`join join-vertical w-full shadow-sm shadow-primary-focus ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        }`}
      >
        <div className="collapse-arrow collapse join-item border border-base-300">
          <div className="collapse-arrow collapse join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-left text-xl font-medium">
              Why should I use this app?
            </div>
            <div className="collapse-content text-left">
              <p>
                This app helps you keep your finger on the pulse. It will be
                easier for you to keep track of all the important things you
                should do that day and the tasks you have completed.
              </p>
            </div>
          </div>
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-left text-xl font-medium">
            What is the best way to use this app?
          </div>
          <div className="collapse-content text-left">
            <p>
              A recommended routine is to create a list of tasks to complete at
              the beginning of each day. Modify, complete or delete tasks
              throughout the day. If something new comes up during the day, just
              add it to the list. At the end of a given day, finish the day by
              clicking the "Finish Day" button. This action will generate a
              final report for you with information on how you did that day and
              will delete all unfinished tasks.
            </p>
          </div>
        </div>
        <div className="collapse-arrow collapse join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-left text-xl font-medium">
            Does this app collect my data?
          </div>
          <div className="collapse-content text-left">
            <p>
              No. This application does not collect any data about its users.
              The application uses the browser as a database and does not have
              any login systems or collect user information. This app is a
              typical Companion App.
            </p>
          </div>
        </div>
        <div className="collapse-arrow collapse join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-left text-xl font-medium">
            How does the skill system work?
          </div>
          <div className="collapse-content text-left">
            <p>
              The skill system is a collection of skill bars that develop with
              you. As you progress, the tasks you complete will develop specific
              skill groups. Completing an important task will increase your
              skill bars faster than regular tasks.
            </p>
          </div>
        </div>
        <div className="collapse-arrow collapse join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-left text-xl font-medium">
            Why skill bars?
          </div>
          <div className="collapse-content text-left">
            <p>
              Colorful graphs and skill bars implement gamification mechanics.
              Game mechanics used in real life are motivating and provide a
              pleasant shot of dopamine when we engage in certain activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
