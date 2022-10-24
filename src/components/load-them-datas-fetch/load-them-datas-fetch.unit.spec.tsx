import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import LoadThemDatasFetch from ".";

describe("LoadThemDatasFetch Area", () => {
    // eg basic unit test for render
    it("should render the LoadThemDatasFetch something", () => {
        const component = render(<LoadThemDatasFetch MacGuffin="test instance props" />);
        expect(component.getByTestId("load-them-datas-fetch__someSubDiv")).toBeInTheDocument();
      });
})