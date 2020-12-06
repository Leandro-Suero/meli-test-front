import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Home from "./components/pages/Home";
import SearchResults from "./components/pages/SearchResults";
import ProductDetails from "./components/pages/ProductDetails";
import NotFound from "./components/pages/NotFound";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBox />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={SearchResults} />
          <Route exact path="/items/:id" component={ProductDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
