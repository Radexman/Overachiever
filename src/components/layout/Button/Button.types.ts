export type ButtonProps = {
  color: "primary" | "secondary" | "info";
  size?: "sm" | "md" | "wide";
  full?: "w-full";
  open: boolean;
  disabled?: boolean;
  togglerFunction: (open: boolean) => void;
  textContent: {
    open: string;
    close: string;
  };
};
