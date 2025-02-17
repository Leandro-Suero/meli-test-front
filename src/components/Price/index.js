import React from "react";
import PropTypes from "prop-types";

import { PricePropType } from "../../libs/PropTypeValues";
import {
  MoneySymbolConverter,
  NumberWithThousandMarker,
} from "../../libs/Converter";
import shipping_2x from "../../assets/img/ic_shipping_2x.png";
import "./index.scss";

function Price({ price: { currency, amount, decimals }, free_shipping }) {
  return (
    <div className="ui-pdp-price">
      <div className="ui-pdp-price__tag">
        <span>
          {`${MoneySymbolConverter(currency)} ${NumberWithThousandMarker(
            amount,
            "."
          )}`}
        </span>
        {decimals !== 0 && (
          <span className="ui-pdp-price__tag--decimals">
            <sup>{decimals}</sup>
          </span>
        )}
      </div>
      {free_shipping && (
        <div className="ui-pdp-price__shipping">
          <img src={shipping_2x} alt="Envio Gratis" title="Envio Gratis" />
        </div>
      )}
    </div>
  );
}

Price.propTypes = {
  price: PricePropType,
  free_shipping: PropTypes.bool.isRequired,
};

export default Price;
