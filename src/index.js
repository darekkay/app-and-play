import React from "react";
import ReactDOM from "react-dom";

import "./base.css";
import "./common/common.css";
import "./common/utils.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
