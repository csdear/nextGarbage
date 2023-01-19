
import { render, screen } from "@testing-library/react";
// import { render, screen } from "../../test-utils"; //EBSCO way.
import React from "react";
import Cornerstone from "../cornerstone";

describe("Cornerstone", () => {
  it("should render Cornerstone", () => {
    render(<Cornerstone />);
    expect(screen.getByTestId("cornerstone")).toBeInTheDocument();
  });
});
