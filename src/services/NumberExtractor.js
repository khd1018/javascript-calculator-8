class NumberExtractor {
  #delimiters = [":", ","];

  has(customDelimiter) {
    return this.#delimiters.includes(customDelimiter);
  }

  add(customDelimiter) {
    this.#delimiters.push(customDelimiter);
  }

  extract(numberString) {
    const numberExtractionRegex = new RegExp(`[${this.#delimiters.join("")}]`);

    return numberString.split(numberExtractionRegex).map((numString) => Number(numString));
  }
}

export default NumberExtractor;
