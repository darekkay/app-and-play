import React from "react";
import {
  HashRouter as Router,
  Route,
  Link as RouteLink
} from "react-router-dom";

import Link from "common/link/Link";

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
    <p className="version text-center">
      <strong>Version:</strong> {process.env.REACT_APP_VERSION}
    </p>
    <nav className="game-selection">
      {routes.map(route => (
        <div
          key={route.path}
          className={`nav-item nav-${route.path.substring(1)}`}
        >
          <RouteLink to={route.path}>{route.text}</RouteLink>
        </div>
      ))}
    </nav>
    <footer className="d-flex justify-content-around">
      <div className="text-center">
        <span>Handmade with &hearts; by </span>
        <Link url="https://darekkay.com" className="text-nowrap">
          Darek Kay
        </Link>
      </div>
      <div className="text-center">
        <span>Fork me on </span>
        <Link url="https://github.com/darekkay/app-and-play">GitHub</Link>
      </div>
    </footer>
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
