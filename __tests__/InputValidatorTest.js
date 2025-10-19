import InputValidator from "../src/services/InputValidator";

describe("InputValidator test", () => {
  const inputValidator = new InputValidator();

  test("빈문자열을 입력한 경우 Error를 발생시킬 수 있다.", () => {
    expect(() => inputValidator.checkEmpty("")).toThrow("[ERROR]");
  });

  test.each([[[1, -2, 3]], [[0, 1, 2, 3]]])("음수를 입력한 경우 Error를 발생시킬 수 있다.", (numbers) => {
    expect(() => inputValidator.checkPositive(numbers)).toThrow("[ERROR]");
  });

  test.each([[[NaN]], [[NaN, NaN]], [[1, NaN]]])("문자열에 숫자가 없거나 잘못된 문자열을 입력한 경우 Error를 발생시킬 수 있다.", (numbers) => {
    expect(() => inputValidator.checkPositive(numbers)).toThrow("[ERROR]");
  });

  test("입력 형식이 잘못된 경우 Error를 발생시킬 수 있다.", () => {
    expect(() => inputValidator.checkPrefix("-*\\k1:2:3")).toThrow("[ERROR]");
  });
});
