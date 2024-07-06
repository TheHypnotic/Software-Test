import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("FizzBuzz", () => {
  it("should return the FizzBuzz if the number is diffrentiable by 5 and three", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return the FizzBuzz if the number is diffrentiable by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it("should return the FizzBuzz if the number is diffrentiable by three", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it("should return the number if the number is not diffrentiable by either 5 and three", () => {
    expect(fizzBuzz(8)).toBe("8");
  });
});
