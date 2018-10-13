import { Client } from "boardgame.io/client";
import _ from "lodash";

import { getState } from "common/util/testing";

import { TheMind } from "./App";

describe("TheMind", () => {
  let client;

  beforeEach(() => {
    client = Client({
      game: TheMind,
      numPlayers: 1
    });
  });

  it("increases the level and assigns bonuses", () => {
    expect(getState(client, "level")).toEqual(1);
    _.times(15, () => client.moves.incLevel());
    expect(getState(client, "level")).toEqual(12);
    expect(getState(client, "lifes")).toEqual(5);
    expect(getState(client, "stars")).toEqual(3);
  });

  it("decreases lifes", () => {
    expect(getState(client, "lifes")).toEqual(2);
    client.moves.decLifes();
    expect(getState(client, "lifes")).toEqual(1);
    client.moves.decLifes();
    expect(getState(client, "lifes")).toEqual(0);
    client.moves.decLifes();
    expect(getState(client, "lifes")).toEqual(0);
  });

  it("decreases stars", () => {
    expect(getState(client, "stars")).toEqual(1);
    client.moves.decStars();
    expect(getState(client, "stars")).toEqual(0);
    client.moves.decStars();
    expect(getState(client, "stars")).toEqual(0);
  });
});
