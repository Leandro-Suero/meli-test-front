import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../ProductCard";
import NoProducts from "../NoProducts";
import { ProductPropType } from "../../libs/PropTypeValues";
import "./index.scss";

function ProductList({ products }) {
  return products.length === 0 || !products ? (
    <NoProducts />
  ) : (
    <section className="ui-search-results">
      <ul className="ui-search-layout">
        {products.map((product) => (
          <li className="ui-search-layout__item" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductPropType).isRequired,
};

export default ProductList;
