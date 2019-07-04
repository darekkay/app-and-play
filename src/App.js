import React, { Suspense } from "react";
import {
  HashRouter as Router,
  Route,
  Link as RouteLink
} from "react-router-dom";

import Loading from "common/loading/Loading";
import Link from "common/link/Link";

import routes from "./routes";
import "./App.scss";

const Index = () => (
  <div className="index">
    <header className="inverted">
      <h1 className="headline">App and Play</h1>
    </header>
    <main>
      <p>
        This is a collection of apps used to complement your board games. Those
        are mostly <strong>not</strong> standalone games and you will need to
        buy the original game to be able to play it.
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
    </main>
    <footer className="inverted d-flex justify-content-around">
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
    <Route exact path="/" component={Index} />
    <section>
      {routes.map(route => (
        <Route
          key={route.path}
          exact
          path={route.path}
          render={() => (
            <Suspense fallback={<Loading className="margin-top" />}>
              {route.component}
            </Suspense>
          )}
        />
      ))}
    </section>
  </Router>
);

export default App;
