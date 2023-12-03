import { ReactNode, ChangeEvent, MutableRefObject } from "react";
import { Task } from "../Types/Task.types";
import { User } from "../Types/User.types";
import { Level } from "../Types/Level.types";

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
    yesterdayRegularTasks: number;
    yesterdayImportantTasks: number;
    importantTasksPercentage: number;
    importantTasksCompleted: number;
    totalRemainingImportantTasks: number;
    regularTasksPercentage: number;
    regularTasksCompleted: number;
    totalRemainingRegularTasks: number;
    completedPercentage: number;
    tasksRemaining: number;
    completedTasks: number;
  };
  displayReport: boolean;
  user: User;
  userLevel: Level;
  setUserLevel: (level: Level) => void;
  createReport: () => void;
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  addTask: (newTask: Task) => void;
  createUser: (user: User) => void;
  completeTask: (task: Task) => void;
  removeTask: (id: string) => void;
  formRef: MutableRefObject<HTMLFormElement | null>;
  editTask: (task: Task) => void;
  updateTask: (id: string, updItem: Task) => void;
  finishDay: () => void;
  yesterdayTasks: Task[];
};
