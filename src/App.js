import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import routes from "./routes";
import "./App.css";

const Index = () => (
  <div className="index">
    <h1 className="headline">App and Play</h1>
    <nav className="game-selection">
      {routes.map((route, _idx) => (
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
        {routes.map((route, idx) => (
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
