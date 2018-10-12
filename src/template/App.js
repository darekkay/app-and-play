/* istanbul ignore file */

import { Client } from "boardgame.io/react";
import { Game } from "boardgame.io/core";

import Board from "./components/Board";

const Template = Game({
  setup: () => ({}),

  moves: {}
});

const App = Client({ game: Template, board: Board, debug: false });

export default App;
