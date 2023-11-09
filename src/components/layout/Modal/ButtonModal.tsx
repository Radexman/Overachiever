import { ReactNode, useEffect, useState, useContext } from "react";
import AppContext from "../../../context/AppContext";
import { MdDeleteForever as RemoveIcon } from "react-icons/md";
import { BiEditAlt as EditIcon } from "react-icons/bi";
import { IoIosCheckmarkCircleOutline as CompleteIcon } from "react-icons/io";
import { Task } from "../../../Types/TaskType";
import { ActionTypes } from "../../../Types/ActionTypes";

type ButtonModalProps = {
  task: Task;
  actionType: ActionTypes;
};

type ModalTypes = {
  heading: string;
  details: string;
  button: string;
  icon: ReactNode;
};

const ButtonModal = ({ actionType, task }: ButtonModalProps) => {
  const [customModal, setCustomModal] = useState({} as ModalTypes);

  const { completeTask, editTask, removeTask } = useContext(AppContext);

  // Create new ID for each modal popup
  const modalId = `my_modal_${actionType}`;

  useEffect(() => {
    customizeModal(actionType);
  });

  const customizeModal = (actionType: ActionTypes) => {
    switch (actionType) {
      case "complete":
        setCustomModal({
          heading: "Complete task",
          details: "Are you sure?",
          button: "Complete",
          icon: <CompleteIcon />,
        });
        break;
      case "edit":
        setCustomModal({
          heading: "Edit task",
          details: "Are you sure?",
          button: "Edit",
          icon: <EditIcon />,
        });
        break;
      case "remove":
        setCustomModal({
          heading: "Remove task",
          details: "Are you sure?",
          button: "Remove",
          icon: <RemoveIcon />,
        });
    }
  };

  return (
    <>
      <button
        onClick={() =>
          (
            document.getElementById(modalId) as HTMLDialogElement | null
          )?.showModal()
        }
        className={`btn btn-sm w-[33%]`}
      >
        <div className="flex items-center text-2xl">{customModal.icon}</div>
      </button>
      <dialog id={modalId} className="modal modal-middle text-left">
        <div className="modal-box max-w-md">
          <h3 className="text-lg font-bold text-primary-focus">
            {customModal.heading}
          </h3>
          <p className="text-md py-4 font-normal normal-case text-primary-focus">
            {customModal.details}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">{customModal.button}</button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ButtonModal;
