import { Client } from "boardgame.io/client";

import { getState } from "common/util/testing";

import { Tapple } from "./App";

describe("Tapple", () => {
  let client;

  beforeEach(() => {
    client = Client({
      game: Tapple,
      numPlayers: 2
    });
  });

  it("sets pressed letters", () => {
    expect(getState(client, "pressedLetters")).toHaveLength(0);
    client.moves.pressLetter("A");
    expect(getState(client, "pressedLetters")).toHaveLength(1);
  });

  it("does not set the same letter twice", () => {
    client.moves.pressLetter("A");
    client.moves.pressLetter("B");
    expect(getState(client, "pressedLetters")).toHaveLength(2);
    client.moves.pressLetter("A");
    client.moves.pressLetter("B");
    expect(getState(client, "pressedLetters")).toHaveLength(2);
  });

  it("resets the board if all letters were pressed", () => {
    getState(client, "letters").forEach(letter =>
      client.moves.pressLetter(letter)
    );
    expect(getState(client, "pressedLetters")).toHaveLength(0);
  });

  it("sets the timer active", () => {
    client.moves.setTimerActive(true);
    expect(getState(client, "timerActive")).toBe(true);
    client.moves.setTimerActive(false);
    expect(getState(client, "timerActive")).toBe(false);
  });

  it("sets the timer restart", () => {
    client.moves.setTimerRestart(true);
    expect(getState(client, "timerRestart")).toBe(true);
    client.moves.setTimerRestart(false);
    expect(getState(client, "timerRestart")).toBe(false);
  });
});
