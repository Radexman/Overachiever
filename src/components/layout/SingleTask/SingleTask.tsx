import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Task } from "../../../Types/TaskType";

type SingleTaskProps = {
  task: Task;
  handleRemove: (id: string) => void;
};

const SingleTask = ({ task, handleRemove }: SingleTaskProps) => {
  const { todo, important, id } = task;
  return (
    <div
      className={`flex items-center justify-between rounded-lg  ${
        important ? "bg-primary-focus" : "bg-secondary-content"
      }`}
    >
      <p className="cursor-pointer p-4 text-left text-lg font-bold">{todo}</p>
      <div className="pr-2">
        <button
          className=""
          onClick={() =>
            (
              document.getElementById("my_modal_5") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          <MdDeleteForever size={25} />
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Are you sure?</h3>
            <p className="py-4">
              This action will remove task and not mark is as completed.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={() => handleRemove(id)}>
                  Delete Task
                </button>
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default SingleTask;
