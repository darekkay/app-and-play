import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import routes from "./routes";
import "./App.scss";

const Index = () => (
  <div className="index">
    <h1 className="headline">App and Play</h1>
    <p>
      This is a collection of apps used to complement your board games. Those
      are mostly <strong>not</strong> standalone games and you will need to buy
      the original game to be able to play it.
    </p>
    <nav className="game-selection">
      {routes.map(route => (
        <div
          key={route.path}
          className={`nav-item nav-${route.path.substring(1)}`}
        >
          <Link to={route.path}>{route.text}</Link>
        </div>
      ))}
    </nav>
  </div>
);

const App = () => (
  <Router>
    <main>
      <Route exact path="/" component={Index} />
      <section>
        {routes.map(route => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </section>
    </main>
  </Router>
);

export default App;
