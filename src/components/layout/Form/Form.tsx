import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../../Types/TaskType";

type FormProps = {
  handleAdd: (newTask: Task) => void;
};

const Form = ({ handleAdd }: FormProps) => {
  const [taskInput, setTaskInput] = useState<string>();
  const [importantInput, setImportantInput] = useState<boolean>();

  const handleTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleImportantChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImportantInput(e.target.checked);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      todo: taskInput!,
      important: importantInput!,
      id: uuidv4(),
    };

    handleAdd(newTask);

    setTaskInput("");
    setImportantInput(false);
  };

  return (
    <div className="mx-auto space-y-4 md:mx-0 md:text-left">
      <h2 className="text-3xl font-bold">Create New Task</h2>
      <p className="text-lg">
        Fill the form to create new task, check the box if it is important.
      </p>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-secondary px-8 py-4"
      >
        <div className="flex flex-col">
          <label
            htmlFor="task"
            className="text-left text-lg font-bold text-slate-50"
          >
            Task Name
          </label>
          <input
            onChange={handleTaskInput}
            type="text"
            value={taskInput}
            placeholder="Write down new task..."
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-lg font-bold text-slate-50">
              Important
            </span>
            <input
              type="checkbox"
              onChange={handleImportantChange}
              className="checkbox-primary checkbox checkbox-lg border-2 border-secondary-content"
              checked={importantInput === true ? true : false}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={!taskInput}
          className="btn btn-primary w-full md:btn-wide"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
