import Form from "../../layout/Form/Form";
import TaskList from "../../layout/TaskList/TaskList";

const Tasks = () => {
  return (
    <div className="container mx-auto text-center md:text-left">
      <div className="flex flex-col items-start justify-between gap-4 px-2 pt-10 md:flex-row">
        <Form />
        <TaskList />
      </div>
    </div>
  );
};

export default Tasks;
