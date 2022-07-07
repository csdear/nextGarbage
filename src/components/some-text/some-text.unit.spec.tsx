import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import SomeText from ".";

describe("SomeText Area", () => {
    // eg basic unit test for render
    it("should render the SomeText something", () => {
        const component = render(<SomeText MacGuffin="test instance props" />);
        expect(component.getByTestId("some-text__someSubDiv")).toBeInTheDocument();
      });
})