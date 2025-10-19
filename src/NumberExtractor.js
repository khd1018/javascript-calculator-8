class NumberExtractor {
  #delimiters = [":", ","];

  constructor(customDelimiter) {
    if (this.#has(customDelimiter)) {
      this.#delimiters.push(customDelimiter);
    }
  }

  #has(customDelimiter) {
    return customDelimiter ? true : false;
  }

  extract(userInputString) {}
}

export default NumberExtractor;
