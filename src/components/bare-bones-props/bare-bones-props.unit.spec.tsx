import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import BareBonesProps from "./index";

describe("Barebones Area", () => {
    // basic unit test for render. |render unit test|
    it("should render the something", () => {
        const component = render(<BareBonesProps title="With Props" />);
        expect(component.getByTestId("big-root-class__input")).toBeInTheDocument();
      });
})