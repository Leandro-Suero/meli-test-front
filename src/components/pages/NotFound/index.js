import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

import './index.scss';
import not_found from '../../../assets/img/not_found.svg'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Mercado Libre - Pagina no encontrada (404)</title>
        <meta name="description" content="El sitio que intenta acceder no existe, realice una busqueda o regrese a la pagina principal para seguir vendiendo o descubir nuevas cosas para comprar" />
      </Helmet>
      <div className="ui-not-found">
      <div className="ui-not-found-card">
        <img src={not_found} alt="Recurso no encontrado"/>
        <h4 className="ui-not-found-card__title">Parece que esta página no existe</h4>
        <Link to="/" className="ui-not-found-card__link">Ir a la página principal</Link>
      </div>
      </div>
    </>
  )
}
