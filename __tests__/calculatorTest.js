import Calculator from "../src/services/Calculator";

describe("Calculator test", () => {
  const calculator = new Calculator();

  test.each([
    [[1, 2, 3], 6],
    [[3, 4, 5], 12],
    [[3, 4, 5], 12],
    [[234], 234],
  ])("숫자들의 합을 구할 수 있다.", (numbers, sumResult) => {
    expect(calculator.sum(numbers)).toBe(sumResult);
  });
});
