import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe('Testing Home page', () => {

    it('can render Homepage', () => {
        render(<Home />);
        const welcome = screen.getByText(/welcome/i);
        const apiproject = screen.getByText(/api-project/i);
        expect(welcome).toBeInTheDocument();
        expect(apiproject).toBeInTheDocument();
    })
});