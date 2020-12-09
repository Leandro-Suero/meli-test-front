import React from "react";
import { render } from "@testing-library/react";
import NoProduct from ".";

describe("Testing NoProduct Component", () => {
  test("Render with the img", () => {
    const { getByAltText } = render(<NoProduct />);
    const imgElement = getByAltText(/Producto no encontrado/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render with the title", () => {
    const { getByText } = render(<NoProduct />);
    const titleElement = getByText(/No hay publicaciones/i);
    expect(titleElement).toBeInTheDocument();
  });
});
