class CalculatorController {
  constructor(calculator, delimiterFinder, numberExtractor, inputValidator) {
    this.calculator = calculator;
    this.delimiterFinder = delimiterFinder;
    this.numberExtractor = numberExtractor;
    this.inputValidator = inputValidator;
  }

  getResult(userInputString) {
    this.#validate(userInputString);

    if (this.#isFirstNotDigit(userInputString)) {
      const { numberString, customDelimiterString } = { ...this.#divide(userInputString) };

      this.#register(this.#getCustomDelimiter(customDelimiterString));
      return this.#calculateSum(numberString);
    }

    return this.#calculateSum(userInputString);
  }

  #divide(userInputString) {
    const newlineIndex = userInputString.indexOf("n");

    const customDelimiterString = userInputString.substring(0, newlineIndex + 1);
    const numberString = userInputString.substring(newlineIndex + 1);

    return { numberString, customDelimiterString };
  }

  #validate(userInputString) {
    this.inputValidator.checkEmpty(userInputString);
  }

  #isFirstNotDigit(userInputString) {
    return Number.isNaN(Number(userInputString[0]));
  }

  #getCustomDelimiter(customDelimiterString) {
    this.inputValidator.checkFormat(customDelimiterString);
    const customDelimiter = this.delimiterFinder.getDelimiter(customDelimiterString);
    this.inputValidator.checkEmpty(customDelimiter);

    return customDelimiter;
  }

  #register(customDelimiter) {
    if (!this.numberExtractor.has(customDelimiter)) {
      this.numberExtractor.add(customDelimiter);
    }
  }

  #calculateSum(numberString) {
    const numbers = [...this.numberExtractor.extract(numberString)];
    this.inputValidator.checkPositive(numbers);
    return this.calculator.sum(numbers);
  }
}

export default CalculatorController;
