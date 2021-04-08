import React from "react";
import { Link } from "react-router-dom";

import CardPrice from "../CardPrice";
import { ProductPropType } from "../../libs/PropTypeValues";
import "./index.scss";

function ProductCard({ product }) {
  return (
    <div className="ui-search-result__wrapper">
      <div className="ui-pcard-content__row">
        <div className="ui-pcard__col-main">
          <div className="ui-pcard-image-container">
            <Link to={`/items/${product.id}`}>
              <img
                className="ui-pcard-image"
                src={product.picture}
                alt="Producto"
              />
            </Link>
          </div>
          <div className="ui-pcard-header">
            <CardPrice
              price={product.price}
              free_shipping={product.free_shipping}
            />
            <Link to={`/items/${product.id}`}>
              <h1 className="ui-pcard-title" data-testid="product-title">
                {product.title}
              </h1>
            </Link>
          </div>
        </div>
        <div className="ui-pcard__col-side">
          {/* Según la documentación de la API solicitada, no está el dato de "Localidad" para mostrar
            aquí como se observa en las specs, por lo tanto agrego esa información al filtrado que se realiza en la API */}
          <span className="ui-pcard-city" data-testid="seller_city">
            {product.seller_city_name}
          </span>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: ProductPropType,
};

export default ProductCard;
