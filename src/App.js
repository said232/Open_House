import React from "react";
import "./App.css";
import MainBar from "./MainBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <MainBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
