import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import ShowError from ".";

describe("Testing ShowError Component", () => {
  test("Render with the img", () => {
    const { getByAltText } = render(
      <Router>
        <ShowError message="Hubo un error" />
      </Router>
    );
    const imgElement = getByAltText(/Hubo un error/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render with the explanation", () => {
    const { getByText } = render(
      <Router>
        <ShowError message="Hubo un error" />
      </Router>
    );
    const textElement = getByText(/Lo sentimos,/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Render with the link to home", () => {
    const { getByRole } = render(
      <Router>
        <ShowError message="Hubo un error" />
      </Router>
    );
    const textElement = getByRole("link");
    expect(textElement).toBeInTheDocument();
  });
});
