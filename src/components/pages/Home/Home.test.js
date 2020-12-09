import React from "react";
import { render } from "@testing-library/react";
import Home from ".";

describe("Testing Home Component", () => {
  test("Render with the author name", () => {
    const { getByText } = render(<Home />);
    const authorElement = getByText(/Suero/i);
    expect(authorElement).toBeInTheDocument();
  });
  test("Render with the title", () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText(/Frontend/i);
    expect(titleElement).toBeInTheDocument();
  });
});
