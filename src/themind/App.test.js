import { Client } from "boardgame.io/client";
import _ from "lodash";

import { TheMind } from "./App";

describe("TheMind", () => {
  let client;

  const getState = prop => client.store.getState().G[prop];

  beforeEach(() => {
    client = Client({
      game: TheMind,
      numPlayers: 1
    });
  });

  it("increases the level and assigns bonuses", () => {
    expect(getState("level")).toEqual(1);
    _.times(15, () => client.moves.incLevel());
    expect(getState("level")).toEqual(12);
    expect(getState("lifes")).toEqual(5);
    expect(getState("stars")).toEqual(3);
  });

  it("decreases lifes", () => {
    expect(getState("lifes")).toEqual(2);
    client.moves.decLifes();
    expect(getState("lifes")).toEqual(1);
    client.moves.decLifes();
    expect(getState("lifes")).toEqual(0);
    client.moves.decLifes();
    expect(getState("lifes")).toEqual(0);
  });

  it("decreases stars", () => {
    expect(getState("stars")).toEqual(1);
    client.moves.decStars();
    expect(getState("stars")).toEqual(0);
    client.moves.decStars();
    expect(getState("stars")).toEqual(0);
  });
});
