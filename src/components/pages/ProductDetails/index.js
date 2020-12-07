import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Spinner from "../../Spinner";

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
        setError("Hubo un error");
        setLoading(false);
      });
  }, [id]);

  return (
    error !== "" ? 'Hubo un error' : 
    loading ? <Spinner /> : 
    <div>
      <p>{product.picture}</p>
      <p>{product.condition}</p>
      <p>{product.sold_quantity}</p>
      <p>{product.title}</p>
      <p>{product.price.amount}<span>.{product.price.decimals}</span></p>
      <p>{product.free_shipping}</p>
      <button>Comprar</button>
      <h3>Descripción</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
