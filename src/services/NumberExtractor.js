class NumberExtractor {
  #delimiters = [":", ","];

  has(customDelimiter) {
    return this.#delimiters.includes(customDelimiter);
  }

  add(customDelimiter) {
    this.#delimiters.push(customDelimiter);
  }

  extract(userInputString) {
    const numberExtractionRegex = new RegExp(`[${this.#delimiters.join("")}]`);

    return userInputString.split(numberExtractionRegex).map((numString) => Number(numString));
  }
}

export default NumberExtractor;
