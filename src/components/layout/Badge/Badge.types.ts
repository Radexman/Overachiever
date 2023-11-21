import { ReactNode } from "react";

export type taskType = "important" | "regular" | "all";

export type BadgeProps = {
  taskType: taskType;
  taskAmount: number;
};

export type BadgeCustomizationTypes = {
  color: string;
  icon?: ReactNode;
  text: string;
};
