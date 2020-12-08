import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from 'axios'

import ProductList from "../../ProductList";
import Spinner from "../../Spinner";
import Breadcrumbs from "../../Breadcrumbs";
import ShowError from "../../ShowError";
import { useQuery } from '../../../hooks/useQuery'

function SearchResults() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  let query = useQuery();
  const q = query.get("search");

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get("/api/items", {params: {q}})
    .then(({data: {items, categories}}) => {
      setProducts(items);
      setCategories(categories);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setError(err.message);
      setLoading(false);
    });
  }, [q])

  return (
    error !== ''? <ShowError message={error} /> :
    loading? <Spinner/> :
    <div>
      <Helmet>
            <title>{`Mercado Libre - Compra ${q} ahora mismo`}</title>
            <meta name="description" content={`Listado de ${q} para recibir en tu casa, elige, paga y listo.`} />
      </Helmet>
      <Breadcrumbs data={categories} />
      <ProductList products={products} />
    </div>
  );
}

export default SearchResults;
