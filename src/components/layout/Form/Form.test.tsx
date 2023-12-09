import { render, screen } from "@testing-library/react";
import { AppContextProvider } from "../../../context/AppContext";
import Form from "./Form";

describe("Form component should", () => {
  test("render correctly", () => {
    render(
      <AppContextProvider>
        <Form />
      </AppContextProvider>,
    );

    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: "Create New Task",
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("render all form input fields", () => {
    render(
      <AppContextProvider>
        <Form />
      </AppContextProvider>,
    );

    const nameElement = screen.getByLabelText("Task Name");
    expect(nameElement).toBeInTheDocument();

    const categoryElement = screen.getByLabelText("Category");
    expect(categoryElement).toBeInTheDocument();

    const detailsElement = screen.getByLabelText("Task Details");
    expect(detailsElement).toBeInTheDocument();

    const importantElement = screen.getByTestId("task-important");
    expect(importantElement).toBeInTheDocument();
  });

  test("disable submit button if there is no task name or task category", () => {
    render(
      <AppContextProvider>
        <Form />
      </AppContextProvider>,
    );

    let nameElement = screen.getByLabelText("Task Name");
    let categoryElement = screen.getByLabelText("Category");
    const submitElement = screen.getByRole("button", {
      name: "Create Task",
    });

    nameElement.setAttribute("value", "");
    categoryElement.setAttribute("value", "");

    expect(submitElement).toBeDisabled();
  });
});
