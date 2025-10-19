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

  extract(userInputString) {
    const numberExtractionRegex = new RegExp(`[${this.#delimiters.join("")}]`);

    return userInputString.split(numberExtractionRegex).map((numString) => Number(numString));
  }
}

export default NumberExtractor;
