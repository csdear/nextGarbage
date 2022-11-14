import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from "./index";

describe("Header Area", () => {
    // basic unit test for render. |render unit test|
    it("should render the something", () => {
        const component = render(<Header />);
        expect(component.getByTestId("header")).toBeInTheDocument();
      });
})