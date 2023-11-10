import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { MdDeleteForever as RemoveIcon } from "react-icons/md";

type RemoveModalProps = {
  id: string;
};

const RemoveModal = ({ id }: RemoveModalProps) => {
  const { removeTask } = useContext(AppContext);

  return (
    <>
      <button
        className="btn btn-sm w-[33%] rounded-none rounded-r-md border-none hover:bg-red-600"
        onClick={() =>
          (
            document.getElementById("remove_modal") as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <RemoveIcon size={25} />
      </button>
      <dialog id="remove_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-primary">Remove Task</h3>
          <p className="py-4 text-primary">
            This action will remove this task and not mark it as completed
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div className="btn-group">
                <button
                  onClick={() => removeTask(id)}
                  className="btn btn-primary w-24"
                >
                  Remove
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

export default RemoveModal;
