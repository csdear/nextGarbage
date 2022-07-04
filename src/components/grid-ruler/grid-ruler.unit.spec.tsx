import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import GridRuler from ".";

describe("GridRuler Area", () => {
    // eg basic unit test for render
    it("should render the GridRuler something", () => {
        const component = render(<GridRuler MacGuffin="test instance props" />);
        expect(component.getByTestId("grid-ruler__someSubDiv")).toBeInTheDocument();
      });
})