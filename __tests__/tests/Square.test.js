/* eslint-disable quotes */
// @ts-check

import Square from "../../src-test-2/Square.js";

test("GetSide", () => {
  const square = new Square(4);
  const actual = square.getSide();
  expect(actual).toBe(4);
});
