import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders burtware.com", () => {
  render(<App />);
  const header = screen.getByText(/burtware.com/i);
  const footer = screen.getByText(/except where otherwise noted/i);
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
