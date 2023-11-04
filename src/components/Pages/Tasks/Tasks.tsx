import Form from "../../layout/Form/Form";
import TaskList from "../../layout/TaskList/TaskList";

const Tasks = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-center md:text-left">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-20">
        <Form />
        <TaskList />
      </div>
    </div>
  );
};

export default Tasks;
