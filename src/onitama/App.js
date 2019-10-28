import { Client } from "boardgame.io/react";
import _ from "lodash";

import Board from "./components/Board";
import deck from "./deck";

export const Onitama = {
  setup: () => ({ cards: _.take(_.shuffle(deck), 5) }),

  moves: {
    swapCard(G, ctx, id) {
      const cards = [...G.cards];
      const temp = cards[id];
      cards[id] = cards[2];
      cards[2] = temp;
      return { ...G, cards };
    }
  }
};

const App = Client({
  game: Onitama,
  board: Board,
  numPlayers: 2,
  debug: false
});

export default App;
