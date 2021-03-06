import { Client } from "boardgame.io/react";

import Board from "./components/Board";
import levels from "./levels";

const increment = (G, value, maxValue) =>
  G[value] < maxValue ? { ...G, [value]: G[value] + 1 } : G;

const decrement = (G, value, minValue) =>
  G[value] > minValue ? { ...G, [value]: G[value] - 1 } : G;

const bonus = level =>
  level < levels.length - 1 ? levels[level - 1].bonus : undefined;

export const TheMind = {
  setup: () => ({
    levels,
    level: 1,
    lifes: 2,
    stars: 1,
    playerCount: undefined
  }),

  moves: {
    incLevel: G => {
      const nextLevel = increment(G, "level", 12);
      if (bonus(G.level) === "star") {
        return increment(nextLevel, "stars", 3);
      }
      if (bonus(G.level) === "life") {
        return increment(nextLevel, "lifes", 5);
      }
      return nextLevel;
    },
    decLifes: G => decrement(G, "lifes", 0),
    decStars: G => decrement(G, "stars", 0),
    setPlayerCount: (G, ctx, playerCount) => ({
      ...G,
      playerCount,
      lifes: playerCount
    })
  }
};

const App = Client({
  game: TheMind,
  board: Board,
  numPlayers: 1,
  debug: false
});

export default App;
