import { Client } from "boardgame.io/react";
import { Game } from "boardgame.io/core";
import _ from "lodash";

import Board from "./components/Board";
import deck from "./deck";

const Onitama = Game({
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
});

const App = Client({
  game: Onitama,
  board: Board,
  numPlayers: 1,
  debug: false
});

export default App;
