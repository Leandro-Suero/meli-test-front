import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ProductCard from ".";

const product = {
  id: "1",
  title: "Telefono Celular Libre Sansei S191 Dual Sim Camara",
  picture: "http://http2.mlstatic.com/D_665683-MLA43813976332_102020-O.jpg",
  free_shipping: true,
  price: { currency: "ARS", amount: 123, decimals: 99 },
  condition: "new",
  seller_city: "Belgrano",
};

describe("Testing ProductCard Component", () => {
  test("Render the product title", () => {
    const { getByText } = render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const titleElement = getByText(/Telefono Celular Libre/i);
    expect(titleElement).toBeInTheDocument();
  });
  test("Render the product image", () => {
    const { getByAltText } = render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const imageElement = getByAltText("Producto");
    expect(imageElement).toBeInTheDocument();
  });
  test("Render the price", () => {
    const { getByText } = render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const priceElement = getByText(/123/i);
    expect(priceElement).toBeInTheDocument();
  });
  test("Display the seller city", () => {
    const { getByTestId } = render(
      <Router>
        <ProductCard product={product} />
      </Router>
    );
    const sellerCity = getByTestId("seller_city");
    expect(sellerCity).toBeInTheDocument();
  });
});
