import React from "react";
import PropTypes from "prop-types";

import { PricePropType } from "../../libs/PropTypeValues";
import {
  MoneySymbolConverter,
  NumberWithThousandMarker,
} from "../../libs/Converter";
import shipping from "../../assets/img/ic_shipping.png";
import "./index.scss";

function CardPrice({ price: { currency, amount, decimals }, free_shipping }) {
  return (
    <div className="ui-pcard-price">
      <div className="ui-pcard-price__tag">
        <span>
          {`${MoneySymbolConverter(currency)} ${NumberWithThousandMarker(
            amount,
            "."
          )}`}
        </span>
        {decimals !== 0 && (
          <span className="ui-pcard-price__tag--decimals">
            <sup>{decimals}</sup>
          </span>
        )}
      </div>
      {free_shipping && (
        <div className="ui-pcard-price__shipping">
          <img src={shipping} alt="Envio Gratis" title="Envio Gratis" />
        </div>
      )}
    </div>
  );
}

CardPrice.propTypes = {
  price: PricePropType,
  free_shipping: PropTypes.bool.isRequired,
};

export default CardPrice;
