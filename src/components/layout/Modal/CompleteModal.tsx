import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { IoIosCheckmarkCircleOutline as CompleteIcon } from "react-icons/io";
import { Task } from "../../../Types/TaskType";

type CompleteModalProps = {
  task: Task;
};

const CompleteModal = ({ task }: CompleteModalProps) => {
  const { completeTask } = useContext(AppContext);

  return (
    <>
      <button
        className="btn btn-sm w-[33%] rounded-none rounded-l-md border-none hover:bg-green-600"
        onClick={() =>
          (
            document.getElementById(
              "complete_modal",
            ) as HTMLDialogElement | null
          )?.showModal()
        }
      >
        <CompleteIcon size={25} />
      </button>
      <dialog id="complete_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-primary">Complete Task</h3>
          <p className="py-4 text-primary">
            This action will remove this task and mark is as completed
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div className="btn-group">
                <button
                  onClick={() => completeTask(task)}
                  className="btn btn-primary w-24"
                >
                  Complete
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

export default CompleteModal;
