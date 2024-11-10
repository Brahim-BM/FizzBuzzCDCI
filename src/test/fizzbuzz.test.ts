 import {describe, it, expect} from "vitest"
import { fizzBuzz } from "../main/fizzbuzz"

describe("fizzbuzz etape 1", () => {
    it("should return input stringify", () =>  {
        expect(fizzBuzz(41)).toBe("41")
    })

    it("should return Fizz if 3 divide input", () =>  {
        expect(fizzBuzz(3)).toBe("Fizz")
    })

    it("should return Fizz if 5 divide input", () =>  {
        expect(fizzBuzz(5)).toBe("Buzz")
    })

    it("should return Fizz if 3 or 5 divide input", () =>  {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })
})

describe("fizzbuzz etape 2", () => {
    it("should return Fizz if number contains 3", () => {
        expect(fizzBuzz(31)).toBe("Fizz");
    })
    it("should return Buzz if number contains 5", () => {
        expect(fizzBuzz(52)).toBe("Buzz");
    })
})