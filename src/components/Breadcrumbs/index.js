import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

function Breadcrumbs({ data }) {
  //limito la cantidad a generar porque algunas tiene muchas 
  let max_links = 5;
  let breadcrumbs = data;
  if (breadcrumbs.length > max_links) {
    breadcrumbs = data.slice(0, max_links);
  }

  return (
    <div className="ui-breadcrumbs">
      <ul className="ui-breadcrumbs-list">
        {breadcrumbs.map((link, key) => (
          <li className="ui-breadcrumbs-item" key={key}>
            <Link to={`/categoria/${link}`} className="ui-breadcrumbs-item__link" >{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Breadcrumbs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Breadcrumbs

