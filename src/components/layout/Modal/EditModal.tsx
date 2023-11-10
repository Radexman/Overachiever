// import { useContext } from "react";
// import AppContext from "../../../context/AppContext";
import { AiOutlineEdit as EditIcon } from "react-icons/ai";
import { Task } from "../../../Types/TaskType";

type EditModalProps = {
  task: Task;
  edit: (task: Task) => void;
};

const EditModal = ({ task, edit }: EditModalProps) => {
  // const { editTask } = useContext(AppContext);

  return (
    <>
      <button
        className="btn btn-sm w-[33%] rounded-none border-none hover:bg-primary-focus"
        onClick={() =>
          (
            document.getElementById("edit_modal") as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <EditIcon size={25} />
      </button>
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-primary">Edit Task</h3>
          <p className="py-4 text-primary">
            This action will put this task in edit mode
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div className="btn-group">
                <button
                  onClick={() => edit(task)}
                  className="btn btn-primary w-24"
                >
                  Edit
                </button>
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditModal;
