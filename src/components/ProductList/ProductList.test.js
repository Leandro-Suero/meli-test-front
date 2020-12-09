import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ProductList from ".";

const products = [
  {
    id: "1",
    title: "Telefono Celular Libre Sansei S191 Dual Sim Camara",
    picture: "http://http2.mlstatic.com/D_665683-MLA43813976332_102020-O.jpg",
    free_shipping: true,
    price: { currency: "ARS", amount: 123, decimals: 99 },
    condition: "new",
  },
  {
    id: "2",
    title: "Otro telefono",
    picture: "http://http2.mlstatic.com/D_665683-MLA43813976332_102020-O.jpg",
    free_shipping: true,
    price: { currency: "ARS", amount: 321, decimals: 0 },
    condition: "used",
  },
];

describe("Testing ProductList Component", () => {
  test("Render the price of product id 2", () => {
    const { getByText } = render(
      <Router>
        <ProductList products={products} />
      </Router>
    );
    const priceElement = getByText(/321/i);
    expect(priceElement).toBeInTheDocument();
  });
  test("Translate condition correctly of item id 1", () => {
    const { getByText } = render(
      <Router>
        <ProductList products={products} />
      </Router>
    );
    const conditionElement = getByText(/nuevo/i);
    expect(conditionElement).toBeInTheDocument();
  });
});
