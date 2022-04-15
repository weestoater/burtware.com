import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders burtware.com", () => {
  render(<App />);
  const header = screen.getByText(/burtware.com/i);
  const footer = screen.getByText(/content on this site/i);
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
