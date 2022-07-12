import React from "react";
import {render, fireEvent, screen,} from '@testing-library/react'
import '@testing-library/jest-dom'


import ImageSlider from ".";

describe("ImageSlider Area", () => {
    // eg basic unit test for render
    it("should render the ImageSlider something", () => {
        const component = render(<ImageSlider MacGuffin="test instance props" />);
        expect(component.getByTestId("image-slider__someSubDiv")).toBeInTheDocument();
      });
})