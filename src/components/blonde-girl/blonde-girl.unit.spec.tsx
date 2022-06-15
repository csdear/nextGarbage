import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import BlondeGirl from "./index";

describe("BlondeGirl Area", () => {
    // basic unit test for render. |render unit test|
    it("should render the something", () => {
        const component = render(<BlondeGirl name="Stacy" id={123} />);
        expect(component.getByTestId("blonde-girl__bio")).toBeInTheDocument();
      });
})