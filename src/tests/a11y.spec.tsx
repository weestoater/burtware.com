import React from "react";
import { render, screen } from "@testing-library/react";
import A11y from "../pages/A11y";

describe('Testing A11y page', () => {

    it('can render A11yPage', () => {
        render(<A11y />);
        const standards = screen.getByText(/standards/i);
        const accessibility = screen.getByText(/accessibility/i);
        expect(standards).toBeInTheDocument();
        expect(accessibility).toBeInTheDocument();
    });
});