import { Client } from "boardgame.io/client";

import { getState } from "common/util/testing";

import { Random } from "./App";

describe("Random", () => {
  let client;

  beforeEach(() => {
    client = Client({
      game: Random,
      numPlayers: 2
    });
  });

  it("selects a random number", () => {
    const initialValue = getState(client, "value");
    client.moves.rollDice(5);

    const value = getState(client, "value");
    expect(value).toBeLessThanOrEqual(5);
    expect(value).not.toEqual(initialValue);
  });
});
