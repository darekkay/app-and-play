import { toArrayIndex } from "./deck";

test("transforms moves into array index", () => {
  expect(toArrayIndex({ x: -2, y: 2 })).toBe(0);
  expect(toArrayIndex({ x: 2, y: 2 })).toBe(4);
  expect(toArrayIndex({ x: -2, y: -2 })).toBe(20);
  expect(toArrayIndex({ x: 2, y: -2 })).toBe(24);
});
