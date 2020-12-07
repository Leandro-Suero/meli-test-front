import React from "react";

import { ProductPropType } from "../../libs/PropTypeValues";

function ProductCard({ product }) {
  return (
    <div>
      <p>{product.picture}</p>
      <p>{product.price.amount}<span>.{product.price.decimals}</span></p>
      <p>{product.free_shipping}</p>
      <p>{product.title}</p>
      <p>{product.condition}</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: ProductPropType,
};

export default ProductCard;
