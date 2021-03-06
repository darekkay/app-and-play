import { Client } from "boardgame.io/react";
import _ from "lodash";

import Board from "./components/Board";
import categories from "./data/categories";

/* Prepare all alphabet letters except Q, X, Y*/
const prepareLetters = _.map(
  _.filter(_.range(65, 91), item => !_.includes([81, 88, 89], item)),
  number => String.fromCharCode(number)
);

const setup = () => ({
  letters: prepareLetters,
  pressedLetters: [],
  turnDuration: 10,
  /* TODO: fix randomized setup for all games */
  category: _.first(_.shuffle(categories)),
  timerRestart: false,
  timerActive: false
});

export const Tapple = {
  setup: setup,
  moves: {
    pressLetter(G, ctx, letter) {
      if (G.pressedLetters.includes(letter)) {
        // letter already pressed
        return G;
      }
      if (G.pressedLetters.length === prepareLetters.length - 1) {
        // last letter was pressed
        return { ...G, pressedLetters: [] };
      }
      return { ...G, pressedLetters: [...G.pressedLetters, letter] };
    },

    setTimerActive(G, ctx, timerActive) {
      return { ...G, timerActive };
    },

    setTimerRestart(G, ctx, timerRestart) {
      return { ...G, timerRestart };
    },

    restart() {
      return setup();
    }
  }
};

const App = Client({
  game: Tapple,
  board: Board,
  numPlayers: 1,
  debug: false
});

export default App;
