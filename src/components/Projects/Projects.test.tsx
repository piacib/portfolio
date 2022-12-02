import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Projects from "./Projects";

describe("loads and displays Projects", () => {
  test("displays title", () => {
    render(<Projects />);
    const projectText = screen.getByText("Projects");
    expect(projectText).toBeInTheDocument();
  });
});
