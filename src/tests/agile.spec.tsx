import React from "react";
import { render, screen } from "@testing-library/react";
import Agile from "../pages/Agile";

describe('Testing Agile page', () => {

    it('can render Agile', () => {
        render(<Agile />);
        const agile = screen.getByText(/agile/i);
        expect(agile).toBeInTheDocument();
    });

    it('can render AgilePage', () => {
        const {container} = render(<Agile />)
        expect(container).toMatchSnapshot();
    });
});