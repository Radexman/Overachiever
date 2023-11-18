const Modal = () => {
  return (
    <dialog id="finish-day-modal" className="modal">
      <div className="modal-box">
        <p className="text-lg font-bold">Are you sure?</p>
        <p className="py-4">
          This action will end current day, clear all remaining not completed
          tasks and generate final raport
        </p>
        <div className="modal-action">
          <form method="dialog">
            <div className="join">
              <button className="btn btn-secondary join-item">
                Finish Day
              </button>
              <button className="btn join-item">Close</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
