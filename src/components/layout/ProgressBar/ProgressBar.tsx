import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar = ({ bgColor, completed, max }: ProgressBarProps) => {
  return (
    <progress
      className={`progress h-3 ${bgColor} w-full`}
      value={completed ? completed : 0}
      max={max}
    ></progress>
  );
};

export default ProgressBar;
