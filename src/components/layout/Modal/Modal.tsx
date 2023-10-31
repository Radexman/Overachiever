import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { MdDeleteForever } from "react-icons/md";

type ModalProps = {
  id: string;
};

const Modal = ({ id }: ModalProps) => {
  const { removeTask } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() =>
          (
            document.getElementById("my_modal_5") as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <div className="flex items-center">
          <p className="uppercase">Delete</p>
          <MdDeleteForever size={25} />
        </div>
      </button>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom text-left sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="text-lg font-bold text-primary-focus">
            Are you sure?
          </h3>
          <p className="text-md py-4 font-normal normal-case text-primary-focus">
            This action will remove task and not mark is as completed.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn btn-primary"
                onClick={() => removeTask(id)}
              >
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
