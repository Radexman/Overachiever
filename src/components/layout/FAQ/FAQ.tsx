const FAQ = () => {
  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <p>Refer to these frequently asked questions if you have any doubts</p>
      <div className="join join-vertical w-full">
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
                should do that day and the tasks you have completed
              </p>
            </div>
          </div>
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-left text-xl font-medium">
            What is the best way to use this app?
          </div>
          <div className="collapse-content text-left">
            <p>
              Create a daily task list, update it as needed, add new tasks as
              they arise, and finish the day by clicking 'Finish Day' to
              generate a report and clear incomplete tasks
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
              This app doesn't gather user data; it operates without logins or
              user information, using the browser as a database. It's a standard
              Companion App
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
              The skill system grows alongside you, progressing as you complete
              tasks. Important tasks boost the skill bar faster than regular
              ones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
