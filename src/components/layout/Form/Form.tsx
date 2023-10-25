import { useState, ChangeEvent } from "react";

const Form = () => {
  const [taskInput, setTaskInput] = useState<string>();
  const [importantInput, setImportantInput] = useState<boolean>();

  const handleTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleImportantChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImportantInput(e.target.checked);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Create New Task</h1>
      <p>Fill the form to create new task, check the box if it is important.</p>
      <form className="max-w-xs rounded-lg bg-secondary px-8 py-4">
        <div className="flex flex-col">
          <label htmlFor="task">Task Name</label>
          <input
            onChange={handleTaskInput}
            type="text"
            value={taskInput}
            placeholder="Write down new task..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex-center form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Important</span>
            <input
              type="checkbox"
              onChange={handleImportantChange}
              className="checkbox"
              checked={importantInput === true ? true : false}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
