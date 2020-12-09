import React from "react";
import { render } from "@testing-library/react";
import Spinner from ".";

describe("Testing Spinner Component", () => {
  test("Render with the img", () => {
    const { getByTestId } = render(<Spinner />);
    const imgElement = getByTestId("spinner");
    expect(imgElement).toBeInTheDocument();
  });
});
