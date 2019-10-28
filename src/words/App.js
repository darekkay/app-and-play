import { Client } from "boardgame.io/react";
import _ from "lodash";

import Board from "./components/Board";

import wordLists from "./data";

export const Words = {
  setup: () => ({
    word: "..."
  }),
  moves: {
    selectWord(G, ctx, listName) {
      const wordList = wordLists[listName];
      return {
        ...G,
        word: wordList[_.random(0, wordList.length - 1)]
      };
    }
  }
};

const App = Client({
  game: Words,
  board: Board,
  numPlayers: 1,
  debug: false
});

export default App;
