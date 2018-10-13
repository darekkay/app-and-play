import { Client } from "boardgame.io/client";

import { getState } from "common/util/testing";

import { Onitama } from "./App";

describe("Onitama", () => {
  let client;

  beforeEach(() => {
    client = Client({
      game: Onitama,
      numPlayers: 2
    });
  });

  it("swaps selected card with the middle card", () => {
    const [first, second, third] = getState(client, "cards");
    client.moves.swapCard(1);
    const [firstSwapped, secondSwapped, thirdSwapped] = getState(
      client,
      "cards"
    );

    expect(first).toEqual(firstSwapped);
    expect(second).toEqual(thirdSwapped);
    expect(third).toEqual(secondSwapped);
  });
});
