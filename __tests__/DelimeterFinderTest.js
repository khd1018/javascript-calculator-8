describe("DelimiterFinder test", () => {
  const delimiterFinder = new DelimiterFinder();

  test.each([
    ["//;\n", ";"],
    ["//-\n", "-"],
    ["// \n", " "],
  ])("숫자들의 합을 구할 수 있다.", (numbers, delimeter) => {
    expect(delimiterFinder.getDelimiter(numbers)).toStrictEqual(delimeter);
  });
});
