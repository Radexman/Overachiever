const CustomModal = () => {
  return (
    <div className="absolute left-0 top-0 z-10 max-w-md rounded-md bg-primary-content">
      <div className="flex flex-col">
        <p>Complete task?</p>
        <p>This action will mark this task as completed</p>
        <button className="btn btn-sm">Complete</button>
      </div>
    </div>
  );
};

export default CustomModal;
