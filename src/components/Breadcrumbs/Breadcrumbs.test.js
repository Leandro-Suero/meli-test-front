import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Breadcrumbs from ".";

describe("Testing Breadcrumbs Component", () => {
  test("Render a breadcrumb", () => {
    const { getByText } = render(
      <Router>
        <Breadcrumbs data={["testing", "the", "breadcrumbs"]} />
      </Router>
    );
    const breadcrumbElement = getByText(/testing/i);
    expect(breadcrumbElement).toBeInTheDocument();
  });
  test("Render all the breadcrumbs", () => {
    const { getAllByRole } = render(
      <Router>
        <Breadcrumbs data={["testing", "the", "breadcrumbs"]} />
      </Router>
    );
    const breadcrumbElements = getAllByRole("link");
    expect(breadcrumbElements.length).toEqual(3);
  });
  test("Max the amount of breadcrumbs to 5", () => {
    const { getAllByRole } = render(
      <Router>
        <Breadcrumbs
          data={[
            "testing",
            "the",
            "breadcrumbs",
            "should not",
            "display",
            "more",
            "than 5",
          ]}
        />
      </Router>
    );
    const breadcrumbElements = getAllByRole("link");
    expect(breadcrumbElements.length).toEqual(5);
  });
});
