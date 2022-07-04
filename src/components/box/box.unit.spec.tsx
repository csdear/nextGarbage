import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import Box from ".";

describe("Box Area", () => {
    // eg basic unit test for render
    it("should render the Box something", () => {
        const component = render(<Box MacGuffin="test instance props" />);
        expect(component.getByTestId("box__someSubDiv")).toBeInTheDocument();
      });
})