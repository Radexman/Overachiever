import { useState, ChangeEvent, useContext, FormEvent, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [taskInput, setTaskInput] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [detailsInput, setDetailsInput] = useState<string>();
  const [importantInput, setImportantInput] = useState<boolean>();

  const { addTask, taskEdit, updateTask, theme } = useContext(AppContext);

  useEffect(() => {
    if (taskEdit.edit === true) {
      setTaskInput(taskEdit.task.todo);
      setDetailsInput(taskEdit.task.details);
      setImportantInput(taskEdit.task.important);
    }
  }, [taskEdit]);

  const handleTaskInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleDetailsInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDetailsInput(e.target.value);
  };

  const handleImportantChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImportantInput(e.target.checked);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      todo: taskInput!,
      category,
      details: detailsInput!,
      important: importantInput!,
      id: uuidv4(),
    };

    if (taskEdit.edit) {
      updateTask(taskEdit.task.id, newTask);
    } else {
      addTask(newTask);
    }

    setTaskInput("");
    setDetailsInput("");
    setImportantInput(false);
  };

  return (
    <div className="w-full space-y-3 lg:w-1/2">
      <h2 className="text-3xl font-bold">Create New Task</h2>
      <p className="text-md">
        Fill the form to create new task, choose the type of task and checking
        the button will mark it as important. Task details are optional
      </p>
      <form
        onSubmit={handleSubmit}
        className={`space-y-2 rounded-lg ${
          theme === "emerald" ? "shadow-lg shadow-slate-500" : "border-0"
        } p-4 py-4 shadow-sm shadow-primary-focus`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="task" className="text-left font-bold">
            Task Name
          </label>
          <input
            onChange={handleTaskInput}
            type="text"
            maxLength={22}
            value={taskInput}
            placeholder="Write down new task..."
            className="input input-bordered input-secondary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-left text-sm font-bold">
            Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="select select-secondary w-full"
          >
            <option disabled selected>
              Choose Task Category
            </option>
            <option>Work</option>
            <option>Study</option>
            <option>Workout</option>
            <option>Cooking</option>
            <option>Hobby</option>
            <option>Housekeeping</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="task-details" className="text-left text-sm font-bold">
            Task Details
          </label>
          <textarea
            id="task-details"
            onChange={handleDetailsInput}
            value={detailsInput}
            placeholder="Write down task details (optional)"
            className="input input-bordered input-secondary block h-36 p-4"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text font-bold">
              {importantInput ? "Task Is Important" : "Task Is Regular"}
            </span>
            <input
              type="checkbox"
              onChange={handleImportantChange}
              className={`checkbox-info checkbox checkbox-lg border-2 border-info`}
              checked={importantInput === true ? true : false}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={!taskInput || category === undefined}
          className="btn btn-secondary btn-outline w-full md:btn-wide"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Form;
