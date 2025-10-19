import NumberExtractor from "../src/services/NumberExtractor";

describe("NumberExtractor test", () => {
  test.each([
    ["", "1,2,3", [1, 2, 3]],
    ["", "3:5:7", [3, 5, 7]],
    [";", "1;3,5", [1, 3, 5]],
    ["-", "2-4:6", [2, 4, 6]],
    [null, "1:2:34", [1, 2, 34]],
    [undefined, `1:2:34`, [1, 2, 34]],
    ["-", "2:4:6", [2, 4, 6]],
    ["", "123", [123]],
    ["", "1_2_3", [NaN]],
    ["", "a:b", [NaN, NaN]],
    ["", "1:-2,3", [1, -2, 3]],
    ["-", "//-\\n1:-2,3", [1, 0, 2, 3]],
  ])("문자열에서 숫자들을 분리할 수 있다.", (customDelimiter, strings, numbers) => {
    const numberExtractor = new NumberExtractor(customDelimiter);
    numberExtractor.add(customDelimiter);
    expect(numberExtractor.extract(strings)).toStrictEqual(numbers);
  });
});
