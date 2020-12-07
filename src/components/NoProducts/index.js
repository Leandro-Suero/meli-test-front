import React from "react";
import search_rescue from '../../assets/img/search_rescue.svg'
import './index.scss'

function NoProducts() {
  return (
    <div className="ui-search-rescue">
      <div className="ui-search-rescue__icon">
        <img src={search_rescue} alt="No product found"/>
      </div>
      <div className="ui-search-rescue__info">
        <h3 className="ui-search-rescue__title">No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul className="ui-search-rescue__list">
          <li className="ui-search-rescue__item">Revisá la ortografía de la palabra.</li>
          <li className="ui-search-rescue__item">Utilizá palabras más genéricas o menos palabras.</li>
          <li className="ui-search-rescue__item">Navegá por las categorías para encontrar un producto similar.</li>
        </ul>
      </div>
    </div>
  );
}

export default NoProducts;
