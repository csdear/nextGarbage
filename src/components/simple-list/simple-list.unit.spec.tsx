import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import SimpleList from ".";

describe("SimpleList Area", () => {
    // eg basic unit test for render
    it("should render the SimpleList something", () => {
        const component = render(<SimpleList MacGuffin="test instance props" />);
        expect(component.getByTestId("simple-list__someSubDiv")).toBeInTheDocument();
      });
})