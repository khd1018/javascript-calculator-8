describe("NumberExtractor test", () => {
  const numberExtractor = new NumberExtractor();

  test.each([
    ["1,2,3", [1, 2, 3]],
    ["1;3,5", [1, 3, 5]],
  ])("문자열에서 숫자들을 분리할 수 있다.", (strings, numbers) => {
    expect(numberExtractor.extract(strings)).toStrictEqual(numbers);
  });
});
