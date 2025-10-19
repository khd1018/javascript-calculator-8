class CalculatorController {
  constructor(calculator, delimiterFinder, numberExtractor, inputValidator) {
    this.calculator = calculator;
    this.delimiterFinder = delimiterFinder;
    this.numberExtractor = numberExtractor;
    this.inputValidator = inputValidator;
  }

  calculateSum(userInputString) {
    this.inputValidator.checkEmpty(userInputString);
    this.inputValidator.checkPrefix(userInputString);

    if (!this.delimiterFinder.hasCustomDelimiter(userInputString)) {
      const numbers = this.numberExtractor.extract(userInputString);
      this.inputValidator.checkPositive(numbers);
      return this.calculator.sum(numbers);
    }

    if (userInputString.includes("*")) {
      throw new Error("[ERROR]잘못된 값 입력");
    }

    const customDelimiter = this.delimiterFinder.getDelimiter(userInputString);

    if (customDelimiter && !this.numberExtractor.has(customDelimiter)) {
      this.numberExtractor.add(customDelimiter);
    }

    const numbers = this.numberExtractor.extract(userInputString);
    this.inputValidator.checkPositive(numbers);
    return this.calculator.sum(numbers);
  }
}

export default CalculatorController;
