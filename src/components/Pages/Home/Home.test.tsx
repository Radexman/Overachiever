import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("Home component should", () => {
  test("render with essential elements", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>,
    );

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Achieve Your Daily Tasks With Ease",
    });
    expect(heading).toBeInTheDocument();

    const tasksSectionButton = screen.getByRole("button", {
      name: "Create New Task",
    });
    expect(tasksSectionButton).toBeInTheDocument();
  });

  test("navigate to tasks page on button click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>,
    );

    const tasksSectionButton = screen.getByRole("button", {
      name: "Create New Task",
    });

    userEvent.click(tasksSectionButton);

    const tasksHeading = screen.getByText("Create New Task");
    expect(tasksHeading).toBeInTheDocument();
  });
});
