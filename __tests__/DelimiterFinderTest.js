import DelimiterFinder from "../src/DelimiterFinder";

describe("DelimiterFinder test", () => {
  const delimiterFinder = new DelimiterFinder();

  test.each([
    ["//;\\n1,2:3", ";"],
    ["//-\\n1,2:3", "-"],
    ["//.\\n1,2:3", "."],
  ])("커스텀 구분자를 구할 수 있다.", (string, delimiter) => {
    expect(delimiterFinder.getDelimiter(string)).toStrictEqual(delimiter);
  });

  test.each([["//\\n1,2:3"], ["1,2:3"]])("커스텀 구분자를 입력하지 않았는지 알 수 있다.", (string) => {
    expect(delimiterFinder.getDelimiter(string)).toBeFalsy();
  });
});
