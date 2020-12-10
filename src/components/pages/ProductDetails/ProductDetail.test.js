import React from "react";
import { render, act } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";

import ProductDetail from ".";

const history = createMemoryHistory();
history.push("/items/MLA884065117");

const product = {
  id: "1",
  title: "Telefono Celular Libre Sansei S191 Dual Sim Camara",
  picture: "http://http2.mlstatic.com/D_665683-MLA43813976332_102020-O.jpg",
  free_shipping: true,
  price: { currency: "ARS", amount: 123, decimals: 99 },
  condition: "new",
  sold_quantity: 56,
  description: "telefono celular super bueno",
  seller_city_name: "Palermo",
};
const categories = [
  "Telefonos",
  "Celulares",
  "Celulares Libres",
  "Tienda pepito",
];

jest.mock("axios");

describe("Testing ProductDetail Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("Call the API for the product", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { item: product, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
        </Router>
      </HelmetProvider>
    );
    expect(axios.get).toBeCalledWith("/api/items/MLA884065117");
    await act(() => Promise.resolve());
  });
  test("Render the product title", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { item: product, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const titleElement = await findByText(/Telefono Celular Libre/i);
    expect(titleElement).toBeInTheDocument();
  });
  test("Render the product image", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { item: product, categories } });
    const { findByAltText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const imageElement = await findByAltText("Producto");
    expect(imageElement).toBeInTheDocument();
  });
  test("Render the price", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { item: product, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const priceElement = await findByText(/123/i);
    expect(priceElement).toBeInTheDocument();
  });
  test("Translate condition correctly", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { item: product, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const conditionElement = await findByText(/nuevo/i);
    expect(conditionElement).toBeInTheDocument();
  });
  test("Render the breadcrumbs", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue({ data: { item: product, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items/:id">
            <ProductDetail />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const breadcrumbs = await findByText(/pepito/i);
    expect(breadcrumbs).toBeInTheDocument();
  });
});
