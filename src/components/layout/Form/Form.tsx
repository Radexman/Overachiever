import { useState, ChangeEvent, FormEvent } from "react";
import { Task } from "../../../Types/Task";

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
      task: taskInput!,
      important: importantInput!,
    };

    handleAdd(newTask);

    setTaskInput("");
    setImportantInput(false);
  };

  return (
    <div className="space-y-4 text-center md:text-left">
      <h1 className="text-3xl font-bold">Create New Task</h1>
      <p>Fill the form to create new task, check the box if it is important.</p>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-secondary px-8 py-4"
      >
        <div className="flex flex-col">
          <label htmlFor="task" className="text-lg font-bold text-slate-50">
            Task Name
          </label>
          <input
            onChange={handleTaskInput}
            type="text"
            value={taskInput}
            placeholder="Write down new task..."
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex-center form-control">
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
          className={`btn btn-primary btn-wide ${
            taskInput === (undefined || "") && "btn-disabled"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
