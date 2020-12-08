import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import './index.scss';

import Breadcrumbs from "../../Breadcrumbs";
import ShowError from "../../ShowError";
import Spinner from "../../Spinner";
import Price from "../../Price";
import { ProductConditionConverter } from '../../../libs/Converter'

function ProductDetails() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError("");
    axios
      .get(`/api/items/${id}`)
      .then(({ data: { item } }) => {
        setProduct(item);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    error !== "" ? <ShowError message={error} /> : 
    loading ? <Spinner /> : 
    <>
      <Helmet>
        <title>{`Mercado Libre - ${id} - ${product.title}`}</title>
        <meta name="description" content={`Todo sobre ${product.title}, fotos, cantidad disponible, estado, compra ahora mismo para recibirlo en tu casa!`} />
      </Helmet>
      <Breadcrumbs data={["HOWTO","Agregar category_id al API","Fetch /categories/category_id","Usar path_from_root", "Construir Breadcrumbs"]} />
      <section className="ui-pdp-container">
        <div className="ui-pdp-content">
          <div className="ui-pdp-content__row">
            <div className="ui-pdp__col-main">
              <div className="ui-pdp-image-container">
                <img className="ui-pdp-image" src={product.picture} alt="Producto"/>
              </div>
            </div>
            <div className="ui-pdp__col-side">
              <div className="ui-pdp-header">
                <div className="ui-pdp-header__subtitle">
                  <span className="ui-pdp-subtitle">
                    <span className="ui-pdp-subtitle__condition">
                      {ProductConditionConverter(product.condition)}
                    </span> - {product.sold_quantity} vendidos
                  </span>
                </div>
                <h1 className="ui-pdp-title">
                  {product.title}
                </h1>
              </div>
              <Price price={product.price} free_shipping={product.free_shipping} />
              <div className="ui-pdp-actions">
                <button className="ui-pdp-actions__cta">Comprar</button>  
              </div>
            </div>
          </div>
          <div className="ui-pdp-content__row">
            <div className="ui-pdp__col-main">
              <div className="ui-pdp-description">
                <h2 className="ui-pdp-description__title">
                  Descripción del producto
                </h2>
                <p className="ui-pdp-description__content">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
