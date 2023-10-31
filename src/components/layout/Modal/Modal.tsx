import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { MdDeleteForever } from "react-icons/md";

type ModalProps = {
  id: string;
};

const Modal = ({ id }: ModalProps) => {
  const { removeTask } = useContext(AppContext);

  return (
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
              <button className="btn" onClick={() => removeTask(id)}>
                Delete Task
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
