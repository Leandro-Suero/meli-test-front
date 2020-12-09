import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NotFound from ".";

describe("Testing NotFound Component", () => {
  test("Render with the img", () => {
    const { getByAltText } = render(
      <HelmetProvider>
        <Router>
          <NotFound />
        </Router>
      </HelmetProvider>
    );
    const imgElement = getByAltText(/Recurso no encontrado/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render with the explanation", () => {
    const { getByText } = render(
      <HelmetProvider>
        <Router>
          <NotFound />
        </Router>
      </HelmetProvider>
    );
    const textElement = getByText(/no existe/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Render with the link to home", () => {
    const { getByRole } = render(
      <HelmetProvider>
        <Router>
          <NotFound />
        </Router>
      </HelmetProvider>
    );
    const textElement = getByRole("link");
    expect(textElement).toBeInTheDocument();
  });
});
