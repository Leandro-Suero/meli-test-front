import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../ProductCard";
import NoProducts from "../NoProducts";
import { ProductPropType } from "../../libs/PropTypeValues";

function ProductList({ products }) {
  return products.length === 0 || !products ? (
    <NoProducts />
  ) : (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(ProductPropType).isRequired,
};

export default ProductList;
