import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

describe("Testing all App with real API calls", () => {
  test("Buy a product", async () => {
    jest.setTimeout(60000);

    const { getByRole, findByText, findByTestId, findAllByTestId } = render(
      <App />
    );
    const inputElement = getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "zapatillas" } });

    const searchButton = getByRole("button");
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);

    /* Search results page */
    const spinner = await findByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    await waitFor(() => expect(spinner).not.toBeInTheDocument());

    const links = await findAllByTestId("product-title", undefined, {
      timeout: 5000,
    });
    await waitFor(() => expect(links.length).toEqual(4));
    fireEvent.click(links[0]);

    /* Product detail page */
    expect(links[0]).not.toBeInTheDocument();

    const botonComprar = await findByText("Comprar");
    expect(botonComprar).toBeInTheDocument();
  });
});
