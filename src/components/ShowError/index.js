import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import image_error from "../../assets/img/not_found.svg";
import "./index.scss";

function ShowError({ message }) {
  return (
    <div className="ui-error">
      <div className="ui-error-card">
        <img src={image_error} alt="Hubo un error"/>
        <h4 className="ui-error-card__title">Lo sentimos, hubo un error.</h4>
        <p className="ui-error-card__desc">Puede intentarlo nuevamente en unos instantes.</p>
        <Link to="/" className="ui-error-card__link">Ir a la página principal</Link>
      </div>
      </div>
  );
}

ShowError.propTypes = {
  message: PropTypes.string.isRequired
}

export default ShowError;
