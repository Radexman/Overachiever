import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

// Button should accept type which will be in charge of color, size, function and text object with two text warinat toggler

describe("Button component should", () => {
  test("render correctly", () => {
    render(
      <Button
        color="primary"
        size="sm"
        open={true}
        togglerFunction={() => {}}
        textContent={{ open: "Open Section", close: "Close Section" }}
      />,
    );

    expect(screen.getByRole("button")).toHaveClass("btn-sm", "btn-primary");
  });

  test("toggle content on user click", () => {
    render(
      <Button
        color="primary"
        size="sm"
        open={true}
        togglerFunction={() => {}}
        textContent={{ open: "Open Section", close: "Close Section" }}
      />,
    );

    const buttonElement = screen.getByRole("button");

    expect(buttonElement.textContent).toBe("Close Section");

    userEvent.click(buttonElement);

    expect(buttonElement.textContent).toBe("Close Section");
  });
});
