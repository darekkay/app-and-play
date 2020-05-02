/* istanbul ignore file */

import React from "react";

const Onitama = React.lazy(() => import("./onitama/App"));
const Tapple = React.lazy(() => import("./tapple/App"));
const TheGame = React.lazy(() => import("./thegame/App"));
const TheMind = React.lazy(() => import("./themind/App"));
const Words = React.lazy(() => import("./words/App"));

const routes = [
  {
    path: "/onitama",
    text: "Onitama",
    component: <Onitama />
  },
  {
    path: "/tapple",
    text: "Tapple",
    component: <Tapple />
  },
  {
    path: "/thegame",
    text: "The Game",
    component: <TheGame />
  },
  {
    path: "/themind",
    text: "The Mind",
    component: <TheMind />
  },
  {
    path: "/words",
    text: "Words",
    component: <Words />
  }
];

export default routes;
