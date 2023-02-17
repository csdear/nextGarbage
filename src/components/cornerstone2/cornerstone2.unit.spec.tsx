
import { render, screen } from "@testing-library/react";
// import { render, screen } from "../../test-utils"; //EBSCO way.
import React from "react";
import Cornerstone from "../cornerstone2";

describe("Cornerstone2", () => {
  it("should render Cornerstone2", () => {
    render(<Cornerstone />);
    expect(screen.getByTestId("cornerstone2")).toBeInTheDocument();
  });
});
