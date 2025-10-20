class CalculatorController {
  constructor(calculator, delimiterFinder, numberExtractor, inputValidator) {
    this.calculator = calculator;
    this.delimiterFinder = delimiterFinder;
    this.numberExtractor = numberExtractor;
    this.inputValidator = inputValidator;
  }

  getResult(userInputString) {}

  #validate(userInputString) {
    this.inputValidator.checkEmpty(userInputString);
    this.inputValidator.checkPrefix(userInputString);
  }

  #isFirstCharDigit(userInputString) {
    return !Number.isNaN(userInputString);
  }

  #register(customDelimiter) {}

  #calculateSum() {}
}

export default CalculatorController;
