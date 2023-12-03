import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar = ({ bgColor, completed, max }: ProgressBarProps) => {
  return (
    <progress
      className={`progress h-4 ${bgColor} w-full border border-secondary-focus`}
      value={completed ? completed : 0}
      max={max}
    ></progress>
  );
};

export default ProgressBar;
