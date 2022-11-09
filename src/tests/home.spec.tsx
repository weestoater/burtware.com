import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe('Testing Home page', () => {

    it('can render Homepage', () => {
        render(<Home />);
        const welcome = screen.getByText(/welcome/i);
        expect(welcome).toBeInTheDocument();
    });

    it('can render HomePage', () => {
        const {container} = render(<Home />)
        expect(container).toMatchSnapshot();
    });
});