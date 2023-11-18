import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";
import { AppContextProvider } from "../../../Context/AppContext";

describe("Navbar component should", () => {
  test("render correctly", () => {
    render(
      <AppContextProvider>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AppContextProvider>,
    );
    const logoElement = screen.getByRole("button", {
      name: "Overachiever",
    });
    expect(logoElement).toBeInTheDocument();
  });

  test("have working nav links", () => {
    render(
      <AppContextProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
        </MemoryRouter>
      </AppContextProvider>,
    );

    const logoButton = screen.getByRole("button", {
      name: "Overachiever",
    });
    userEvent.click(logoButton);
    const homePage = screen.getByTestId("home");
    expect(homePage).toBeInTheDocument();
  });
});
