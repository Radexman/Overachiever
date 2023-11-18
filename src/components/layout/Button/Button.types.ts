export type ButtonProps = {
  color: "primary" | "secondary";
  size?: "sm" | "md" | "wide";
  full?: "w-full";
  open: boolean;
  togglerFunction: (open: boolean) => void;
  textContent: {
    open: string;
    close: string;
  };
};
