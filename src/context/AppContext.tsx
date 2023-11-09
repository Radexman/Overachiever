import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  ChangeEvent,
} from "react";
import { Task } from "../Types/TaskType";

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  taskList: Task[];
  completed: Task[];
  theme: string;
  taskEdit: {
    task: Task;
    edit: boolean;
  };
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  addTask: (newTask: Task) => void;
  completeTask: (task: Task) => void;
  removeTask: (id: string) => void;
  editTask: (task: Task) => void;
  updateTask: (id: string, updItem: Task) => void;
};

const AppContext = createContext({} as ContextProps);

export const AppContextProvider = ({ children }: ContextProviderProps) => {
  // Create task list state and fetch it from local storage
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const storedState = JSON.parse(localStorage.getItem("tasks")!);
    return storedState || [];
  });

  // Create completed task list state and fetch it from local storage
  const [completed, setCompleted] = useState<Task[]>(() => {
    const storedCompleted = JSON.parse(
      localStorage.getItem("completed-tasks")!,
    );
    return storedCompleted || [];
  });

  // Create state for app theme and fetch it from local storage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme")! : "emerald",
  );

  // State for task edit
  const [taskEdit, setTaskEdit] = useState({
    task: {} as Task,
    edit: false,
  });

  // Check on component mount if tasks array exists in local storage
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("tasks")!);
    if (storedTaskList) {
      setTaskList(storedTaskList);
    }
  }, []);

  // Check on component mount if completed tasks array exists in local storage
  useEffect(() => {
    const storedCompletedList = JSON.parse(
      localStorage.getItem("completed-tasks")!,
    );
    if (storedCompletedList) {
      setCompleted(storedCompletedList);
    }
  }, []);

  // Update tasks in local storage on taskList state change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  // Update completed tasks in local storage on completed change
  useEffect(() => {
    localStorage.setItem("completed-tasks", JSON.stringify(completed));
  }, [completed]);

  // Toggle on state change app theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

  // Edit task
  const editTask = (task: Task, id?: string) => {
    setTaskEdit({
      task,
      edit: true,
    });
  };

  // Update task
  const updateTask = (id: string, updItem: Task) => {
    setTaskList(
      taskList.map((task) => (task.id === id ? { ...task, ...updItem } : task)),
    );

    setTaskEdit({
      task: {} as Task,
      edit: false,
    });
  };

  // Toggle theme switch
  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("emerald");
    }
  };

  // Add new task
  const addTask = (newTask: Task) => {
    if (newTask.important) {
      setTaskList([newTask, ...taskList]);
    } else {
      setTaskList([...taskList, newTask]);
    }
  };

  // Complete task
  const completeTask = (task: Task, id?: string) => {
    setCompleted([...completed, task]);
    removeTask(task.id);
  };

  // Remove task
  const removeTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        taskList,
        theme,
        taskEdit,
        completed,
        toggleTheme,
        addTask,
        completeTask,
        removeTask,
        editTask,
        updateTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
