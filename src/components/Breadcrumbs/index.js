import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.scss';

function Breadcrumbs({ data }) {
  return (
    <div className="ui-breadcrumbs">
      <ul className="ui-breadcrumbs-list">
        {data.map((link, key) => (
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

