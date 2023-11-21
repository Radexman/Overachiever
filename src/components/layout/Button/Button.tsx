import { ButtonProps } from "./Button.types";

const Button = ({
  color,
  size,
  full,
  open,
  disabled,
  togglerFunction,
  textContent,
}: ButtonProps) => {
  return (
    <button
      onClick={() => togglerFunction(!open)}
      className={`btn btn-outline rounded-lg p-2 ${
        disabled && "btn-disabled"
      } btn-${color} ${size ? `btn-${size}` : `${full}`}`}
    >
      {!open ? textContent.open : textContent.close}
    </button>
  );
};

export default Button;
