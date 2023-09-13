import { describe, expect, it } from "vitest";
import { add } from "./calculator.ts";

describe("calculator", () => {
  describe("add function", () => {
    it("should add two numbers", () => {
      const firstNumber = 1;
      const secondNumber = 2;
      const expected = 3;
      const actual = add(firstNumber, secondNumber);

      expect(actual).toBe(expected);
    });
  });
});
