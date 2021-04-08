import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/img/Logo_ML.png";
import Search from "../../assets/img/ic_Search.png";
import "./index.scss";

function SearchBox() {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/items?search=${query}`);
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <header>
      <div className="nav-container">
        <nav>
          <Link to="/" tabIndex="3">
            <img
              src={Logo}
              alt="Mercado Libre Argentina - Donde comprar y vender de todo"
            />
          </Link>
          <form className="nav-search" onSubmit={handleSubmit}>
            <input
              type="text"
              className="nav-search__input"
              value={query}
              onChange={handleInputChange}
              aria-label="Ingresá lo que quieras encontrar"
              name="query"
              placeholder="Nunca dejes de buscar"
              maxLength="120"
              autoFocus=""
              autoComplete="off"
              tabIndex="1"
            />
            <button type="submit" className="nav-search__btn" tabIndex="2">
              <img src={Search} alt="Buscar" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}

export default SearchBox;
