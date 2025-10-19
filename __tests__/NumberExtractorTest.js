import NumberExtractor from "../src/NumberExtractor";

describe("NumberExtractor test", () => {
  test.each([
    ["", "1,2,3", [1, 2, 3]],
    ["", "3:5:7", [3, 5, 7]],
    [";", "1;3,5", [1, 3, 5]],
    ["-", "2-4:6", [2, 4, 6]],
    [null, "1:2:34", [1, 2, 34]],
    [undefined, `1:2:34`, [1, 2, 34]],
    ["-", "2:4:6", [2, 4, 6]],
  ])("문자열에서 숫자들을 분리할 수 있다.", (customDelimiter, strings, numbers) => {
    const numberExtractor = new NumberExtractor(customDelimiter);

    expect(numberExtractor.extract(strings)).toStrictEqual(numbers);
  });
});
