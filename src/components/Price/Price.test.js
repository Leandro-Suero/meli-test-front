import React from "react";
import { render } from "@testing-library/react";
import Price from ".";

const price = { currency: "ARS", amount: 123, decimals: 99 };

describe("Testing Price Component", () => {
  test("Render with the img for free shipping", () => {
    const { getByAltText } = render(
      <Price free_shipping={true} price={price} />
    );
    const imgElement = getByAltText(/Envio Gratis/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render without the img for free shipping", () => {
    const { queryByAltText } = render(
      <Price free_shipping={false} price={price} />
    );
    const imgElement = queryByAltText(/Envio Gratis/i);
    expect(imgElement).toBeNull();
  });
  test("Render with the price", () => {
    const { getByText } = render(<Price free_shipping={true} price={price} />);
    const priceElement = getByText(/123/i);
    expect(priceElement).toBeInTheDocument();
  });
  test("Render with the correct money sign", () => {
    const { getByText } = render(<Price free_shipping={true} price={price} />);
    const priceElement = getByText(/\$/i);
    expect(priceElement).toBeInTheDocument();
  });
});
