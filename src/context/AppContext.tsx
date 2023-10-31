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
  theme: string;
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  addTask: (newTask: Task) => void;
  removeTask: (id: string) => void;
};

const AppContext = createContext({} as ContextProps);

export const AppContextProvider = ({ children }: ContextProviderProps) => {
  // Create task list state and fetch it from local storage
  const [taskList, setTaskList] = useState<Task[]>(() => {
    const storedState = JSON.parse(localStorage.getItem("tasks")!);
    return storedState || [];
  });

  // Create state for app theme and fetch it from local storage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme")! : "emerald",
  );

  // Check on component mount if tasks array exists in local storage
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("tasks")!);
    if (storedTaskList) {
      setTaskList(storedTaskList);
    }
  }, []);

  // Update tasks in local storage on taskList state change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  // Toggle on state change app theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme!);
  }, [theme]);

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

  // Remove task
  const removeTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <AppContext.Provider
      value={{ taskList, theme, toggleTheme, addTask, removeTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
