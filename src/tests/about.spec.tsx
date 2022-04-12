import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../pages/About";

describe('Testing About page', () => {

    it('can render About', () => {
        render(<About />);
        const burtware = screen.getByText(/about burtware/i);
        const cypress = screen.getByText(/cypress/i);
        expect(burtware).toBeInTheDocument();
        expect(cypress).toBeInTheDocument();
    });
});