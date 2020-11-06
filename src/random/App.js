import { Client } from "boardgame.io/react";
import _ from "lodash";

import Board from "./components/Board";

export const Random = {
  setup: () => ({
    value: "?"
  }),
  moves: {
    rollDice(G, ctx, maxValue) {
      return {
        ...G,
        value: _.random(maxValue - 1) + 1
      };
    },

    reset(G, ctx) {
      return {
        ...G,
        value: "?"
      };
    }
  }
};

const App = Client({
  game: Random,
  board: Board,
  numPlayers: 1,
  debug: false
});

export default App;
