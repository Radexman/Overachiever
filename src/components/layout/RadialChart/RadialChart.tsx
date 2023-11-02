import { CSSProperties } from "styled-components";
import RadialChartProps from "../../../Types/RadialChart";

const RadialChart = ({ percentage, textColor, bgColor }: RadialChartProps) => {
  return (
    <div
      className={`radial-progress ${textColor} ${bgColor}`}
      style={{ "--value": percentage, "--size": "7.5rem" } as CSSProperties}
    >
      {`${percentage.toFixed()}%`}
    </div>
  );
};

export default RadialChart;
