import React from 'react'
import {Helmet} from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Mercado Libre - Pagina no encontrada (404)</title>
        <meta name="description" content="El sitio que intenta acceder no existe, realice una busqueda o regrese a la pagina principal para seguir vendiendo o descubir nuevas cosas para comprar" />
      </Helmet>
      <div>
        <h1>404 - NOT FOUND</h1>
      </div>
    </>
  )
}
