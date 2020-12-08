import React from "react";
import search_rescue from "../../assets/img/search_rescue.svg";
import "./index.scss";

function NoProducts() {
  return (
    <div className="ui-search-rescue">
      <div className="ui-search-rescue-card">
        <div className="ui-search-rescue-card__icon">
          <img src={search_rescue} alt="Producto no encontrado" />
        </div>
        <div className="ui-search-rescue-card__info">
          <h3 className="ui-search-rescue-card__title">
            No hay publicaciones que coincidan con tu búsqueda.
          </h3>
          <ul className="ui-search-rescue-card__list">
            <li className="ui-search-rescue-card__item">
              Revisá la ortografía de la palabra.
            </li>
            <li className="ui-search-rescue-card__item">
              Utilizá palabras más genéricas o menos palabras.
            </li>
            <li className="ui-search-rescue-card__item">
              Navegá por las categorías para encontrar un producto similar.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoProducts;
