class DelimiterFinder {
  #delimiterSearchRegex = /\/\/(.*?)\\n/;

  getDelimiter(customDelimiterString) {
    const customDelimiter = customDelimiterString.match(this.#delimiterSearchRegex) || [];

    return customDelimiter.pop();
  }
}

export default DelimiterFinder;
