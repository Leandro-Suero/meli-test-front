import React from "react";
import PropTypes from "prop-types";

import ProductList from "../../ProductList";

function SearchResults(props) {
  return (
    <div>
      <h1>Search results</h1>
      <ProductList />
    </div>
  );
}

SearchResults.propTypes = {};

export default SearchResults;
