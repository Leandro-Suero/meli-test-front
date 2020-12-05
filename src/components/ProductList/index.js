import React from "react";
import PropTypes from "prop-types";

import ProductCard from "../ProductCard";

function ProductList(props) {
  return (
    <div>
      <h2>List of products</h2>
      <ProductCard />
      <ProductCard />
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;
