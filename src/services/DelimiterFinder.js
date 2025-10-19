class DelimiterFinder {
  #delimiterSearchRegex = /\/\/(.*?)\\n/;

  constructor() {}

  hasCustomDelimiter(userInputString) {
    const CUSTOM_DELIMITER_PATTERN = /^\/\/(\S+)\n/;

    return CUSTOM_DELIMITER_PATTERN.test(userInputString);
  }

  getDelimiter(customDelimiterString) {
    const customDelimiter = customDelimiterString.match(this.#delimiterSearchRegex) || [];

    return customDelimiter.pop();
  }
}

export default DelimiterFinder;
