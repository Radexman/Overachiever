import { createContext, useState, useEffect, ChangeEvent } from "react";
import { Task } from "../Types/Task.types";
import { User } from "../Types/User.types";
import { ContextProviderProps, ContextProps } from "./AppContext.types";

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

  // State for user profile
  const [user, setUser] = useState<User>(() => {
    const storedUser = JSON.parse(localStorage.getItem("stored-user")!);
    return storedUser || {};
  });

  // Create state for app theme and fetch it from local storage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme")! : "emerald",
  );

  const [displayReport, setDisplayReport] = useState(false);

  const createReport = () => {
    setDisplayReport(true);
  };

  const closeReport = () => {
    setDisplayReport(false);
  };

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

  // Check on component mount if user object exists in local storage
  useEffect(() => {
    const storedUserObject = JSON.parse(localStorage.getItem("stored-user")!);
    if (storedUserObject) {
      setUser(storedUserObject);
    }
  }, []);

  // Update user object in local store on user change
  useEffect(() => {
    localStorage.setItem("stored-user", JSON.stringify(user));
  }, [user]);

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

  // Function to convert Blob URL to Base64
  const convertBlobToBase64 = (blobUrl: string): Promise<string> => {
    return fetch(blobUrl)
      .then((response) => response.blob())
      .then((blob) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64Data = reader.result as string;
            resolve(base64Data);
          };
          reader.readAsDataURL(blob);
        });
      });
  };

  // Convert Blob URL to Base64 and update user
  const convertAndSetUser = async (user: User) => {
    if (user.imageUrl && user.imageUrl.startsWith("blob:")) {
      const base64Data = await convertBlobToBase64(user.imageUrl);
      setUser({ ...user, imageUrl: base64Data });
    } else {
      setUser(user);
    }
  };

  // Edit task
  const editTask = (task: Task) => {
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

  // Create new user
  const createUser = async (user: User) => {
    await convertAndSetUser(user);
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
  const completeTask = (task: Task) => {
    setCompleted([...completed, task]);
    removeTask(task.id);
  };

  // Remove task
  const removeTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // Chart calculations
  const tasksTotal = taskList.length + completed.length;
  const completedTasks = completed.length;
  const tasksRemaining = tasksTotal - completedTasks;
  const completedPercentage = (completedTasks / tasksTotal) * 100;

  // Regular tasks
  let regularTotalTasks = 0;
  let regularTasksCompleted = 0;

  // Important Tasks Not Completed Amount
  let importantTotalTasks = 0;
  for (const task of taskList) {
    if (task.important) {
      importantTotalTasks++;
    } else {
      regularTotalTasks++;
    }
  }

  // Important Tasks Completed Amount
  let importantTasksCompleted = 0;
  for (const task of completed) {
    if (task.important) {
      importantTasksCompleted++;
    } else {
      regularTasksCompleted++;
    }
  }

  // Total Regular Tasks (Not Completed & Completed)
  const totalRegularTasks = regularTotalTasks + regularTasksCompleted;
  const totalRemainingRegularTasks = totalRegularTasks - regularTasksCompleted;

  // Regular Tasks Percentage
  const regularTasksPercentage =
    (regularTasksCompleted / totalRegularTasks) * 100;

  // Total Important Tasks (Not Completed & Completed)
  const totalImportantTasks = importantTotalTasks + importantTasksCompleted;
  const totalRemainingImportantTasks =
    totalImportantTasks - importantTasksCompleted;

  // Important Tasks Percentage
  const importantTasksPercentage =
    (importantTasksCompleted / totalImportantTasks) * 100;

  const chartCalculations = {
    importantTasksPercentage,
    importantTasksCompleted,
    totalRemainingImportantTasks,
    regularTasksPercentage,
    regularTasksCompleted,
    totalRemainingRegularTasks,
    completedPercentage,
    tasksRemaining,
    completedTasks,
  };

  return (
    <AppContext.Provider
      value={{
        taskList,
        theme,
        taskEdit,
        completed,
        user,
        chartCalculations,
        displayReport,
        createReport,
        closeReport,
        toggleTheme,
        addTask,
        createUser,
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
