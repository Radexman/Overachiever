import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge component should", () => {
  test("render correctly", () => {
    render(<Badge taskType="important" taskAmount={5} />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
  });

  test("display correct color", () => {
    render(<Badge taskType="important" taskAmount={5} />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement.classList).toContain("badge-warning");
  });

  test("display correct task type and task number", () => {
    render(<Badge taskType="important" taskAmount={5} />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement.textContent).toBe("Important 5");
  });
});
