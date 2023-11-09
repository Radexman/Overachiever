import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { IoIosCheckmarkCircleOutline as CompleteIcon } from "react-icons/io";
import { Task } from "../../../Types/TaskType";

type EditModalProps = {
  task: Task;
};

const EditModal = ({ task }: EditModalProps) => {
  const { editTask } = useContext(AppContext);

  return (
    <>
      <button
        className="btn btn-sm w-[33%] rounded-none hover:bg-primary-focus"
        onClick={() =>
          (
            document.getElementById("edit_modal") as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <CompleteIcon size={25} />
      </button>
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-primary">Edit Task</h3>
          <p className="py-4">This action will put this task in edit mode</p>
          <div className="modal-action">
            <form method="dialog">
              <div className="btn-group">
                <button
                  onClick={() => editTask(task)}
                  className="btn btn-primary"
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
