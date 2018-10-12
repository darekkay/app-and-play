import { Client } from "boardgame.io/client";

import { Onitama } from "./App";

describe("Onitama", () => {
  let client;

  const getState = prop => client.store.getState().G[prop];

  beforeEach(() => {
    client = Client({
      game: Onitama,
      numPlayers: 2
    });
  });

  it("swaps selected card with the middle card", () => {
    const [first, second, third] = getState("cards");
    client.moves.swapCard(1);
    const [firstSwapped, secondSwapped, thirdSwapped] = getState("cards");

    expect(first).toEqual(firstSwapped);
    expect(second).toEqual(thirdSwapped);
    expect(third).toEqual(secondSwapped);
  });
});
