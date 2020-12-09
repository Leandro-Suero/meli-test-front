import React from "react";
import { render, act } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";

import SearchResults from ".";

const items = [
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
const categories = [
  "Consolas",
  "Videojuegos",
  "Accesorios para Consolas",
  "Accesorios para PC Gaming",
  "Repuestos para Consolas",
  "Flippers y Arcade",
  "Otros",
];

const history = createMemoryHistory();
history.push("/items");

jest.mock("axios");

describe("Testing SearchResults Component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("Call the API for the products", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: { items, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items">
            <SearchResults />
          </Route>
        </Router>
      </HelmetProvider>
    );
    expect(axios.get).toBeCalledWith("/api/items", {
      params: { q: null },
    });
    await act(() => Promise.resolve());
  });
  test("Render the breadcrumbs", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: { items, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items">
            <SearchResults />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const breadcrumbs = await findByText(/Gaming/i);
    expect(breadcrumbs).toBeInTheDocument();
  });
  test("Render the product title", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: { items, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items">
            <SearchResults />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const titleElement = await findByText(/Otro telefono/i);
    expect(titleElement).toBeInTheDocument();
  });
  test("Render the price", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: { items, categories } });
    const { findByText } = render(
      <HelmetProvider>
        <Router history={history}>
          <Route path="/items">
            <SearchResults />
          </Route>
        </Router>
      </HelmetProvider>
    );
    const priceElement = await findByText(/123/i);
    expect(priceElement).toBeInTheDocument();
  });
});
