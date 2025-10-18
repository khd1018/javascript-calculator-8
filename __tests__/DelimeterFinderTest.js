describe("DelimiterFinder test", () => {
  const delimiterFinder = new DelimiterFinder();

  test.each([
    ["//;\n", ";"],
    ["//-\n", "-"],
    ["// \n", " "],
  ])("커스텀 구분자를 구할 수 있다.", (numbers, delimeter) => {
    expect(delimiterFinder.getDelimiter(numbers)).toStrictEqual(delimeter);
  });
});
