import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import "./App.scss";

import Home from "./components/pages/Home";
import SearchBox from "./components/SearchBox";
import Spinner from "./components/Spinner";

const SearchResults = lazy(() => import("./components/pages/SearchResults"));
const ProductDetails = lazy(() => import("./components/pages/ProductDetails"));
const NotFound = lazy(() => import("./components/pages/NotFound"));

function App() {
  //default domain for all future axios calls
  axios.defaults.baseURL = process.env.REACT_APP_MY_MIDDLEWARE_BASEURL;

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>
            Mercado Libre Argentina - Donde comprar y vender de todo
          </title>
          <meta
            name="description"
            content="El mas grande mercado online de la region, mas rápido y seguro! De la tienda del vendedor a tu casa de la manera mas practica y facil."
          />
        </Helmet>
        <Router>
          <SearchBox />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/items" component={SearchResults} />
              <Route exact path="/items/:id" component={ProductDetails} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
