import { ReactNode, ChangeEvent } from "react";
import { Task } from "../Types/Task.types";
import { User } from "../Types/User.types";

export type ContextProviderProps = {
  children: ReactNode;
};

export type ContextProps = {
  taskList: Task[];
  completed: Task[];
  theme: string;
  taskEdit: {
    task: Task;
    edit: boolean;
  };
  chartCalculations: {
    importantTasksPercentage: number;
    totalRemainingImportantTasks: number;
    importantTasksCompleted: number;
    regularTasksPercentage: number;
    regularTasksCompleted: number;
    totalRemainingRegularTasks: number;
    completedPercentage: number;
    tasksRemaining: number;
    completedTasks: number;
  };
  user: User;
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  addTask: (newTask: Task) => void;
  createUser: (user: User) => void;
  completeTask: (task: Task) => void;
  removeTask: (id: string) => void;
  editTask: (task: Task) => void;
  updateTask: (id: string, updItem: Task) => void;
};
