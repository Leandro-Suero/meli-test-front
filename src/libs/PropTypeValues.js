import PropTypes from "prop-types";

export let PricePropType = PropTypes.shape({
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired,
}).isRequired;

export let ProductPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PricePropType,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool.isRequired,
}).isRequired;
