import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import Grid from ".";

describe("Grid Area", () => {
    // eg basic unit test for render
    it("should render the Grid something", () => {
        const component = render(<Grid MacGuffin="test instance props" />);
        expect(component.getByTestId("grid__someSubDiv")).toBeInTheDocument();
      });
})