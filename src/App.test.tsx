import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders burtware.com", () => {
  render(<App />);
  const content = screen.getByText(/burtware.com/i);
  expect(content).toBeInTheDocument();
});
