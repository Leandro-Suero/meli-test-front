import React from "react";
import PropTypes from "prop-types";

function ProductDetails({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}

ProductDetails.propTypes = {};

export default ProductDetails;
