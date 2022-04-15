import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReactPage from "../pages/React";

describe('Testing React page', () => {

    it('can render ReactPage', () => {
        const {container} = render(<ReactPage />)
        expect(container).toMatchSnapshot();
    });
});