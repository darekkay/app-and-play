import { Client } from "boardgame.io/client";

import { getState } from "common/util/testing";

import { Words } from "./App";

describe("Words", () => {
  let client;

  beforeEach(() => {
    client = Client({
      game: Words,
      numPlayers: 2
    });
  });

  it("selects a random word", () => {
    const initialWord = getState(client, "word");
    client.moves.selectWord("einfach");

    const word = getState(client, "word");
    expect(word.length).toBeGreaterThan(0);
    expect(word).not.toEqual(initialWord);
  });
});
