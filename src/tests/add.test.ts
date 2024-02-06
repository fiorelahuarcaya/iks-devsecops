import { add, subtract } from "../operations";
import { expect, test } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});

test("subsctract", () => {
  expect(subtract(3, 2)).toBe(1);
});
