import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import SearchBox from ".";

describe("Testing SearchBox Component", () => {
  test("Render with the img", () => {
    const { getByAltText } = render(
      <Router>
        <SearchBox />
      </Router>
    );
    const imgElement = getByAltText(/Mercado Libre Argentina/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render with the search button", () => {
    const { getByRole } = render(
      <Router>
        <SearchBox />
      </Router>
    );
    const submitElement = getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });
  test("Render with the input", () => {
    const { getByRole } = render(
      <Router>
        <SearchBox />
      </Router>
    );
    const inputElement = getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
