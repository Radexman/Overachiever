// import AppContext from "../../../context/AppContext";
import { MdDeleteForever } from "react-icons/md";
import { Task } from "../../../Types/TaskType";
import { ActionTypes } from "../../../Types/ActionTypes";

type ButtonModalProps = {
  task: Task;
  actionType: ActionTypes;
};

const ButtonModal = ({ actionType }: ButtonModalProps) => {
  const pickHoverColor = (actionType: ActionTypes) => {
    switch (actionType) {
      case "complete":
        return "bg-green-600";
      case "edit":
        return "bg-primary-focus";
      case "remove":
        return "bg-red-600";
      default:
        return "bg-slate-600";
    }
  };

  return (
    <>
      <button
        onClick={() =>
          (
            document.getElementById("my_modal_5") as HTMLDialogElement | null
          )?.showModal()
        }
        className={`btn btn-sm w-[33%] ${`hover:${pickHoverColor(
          actionType,
        )}`}`}
      >
        <div className="flex items-center">
          <MdDeleteForever size={25} />
        </div>
      </button>
      <dialog id="my_modal_5" className="modal modal-middle text-left">
        <div className="modal-box max-w-md">
          <h3 className="text-lg font-bold text-primary-focus">
            Are you sure?
          </h3>
          <p className="text-md py-4 font-normal normal-case text-primary-focus">
            This action will remove task and not mark is as completed.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Delete Task</button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ButtonModal;
