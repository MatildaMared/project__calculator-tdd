import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe("App component", () => {
  it("should render without crashing", () => {
    render(<App />);
  });

  it("should render a calculator", () => {
    render(<App />);
    expect(screen.getByTestId("calculator")).toBeDefined();
  });
});
