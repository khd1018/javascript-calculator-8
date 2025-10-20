class CalculatorController {
  constructor(calculator, delimiterFinder, numberExtractor, inputValidator) {
    this.calculator = calculator;
    this.delimiterFinder = delimiterFinder;
    this.numberExtractor = numberExtractor;
    this.inputValidator = inputValidator;
  }

  calculateSum(userInputString) {
    this.#validate(userInputString);
  }

  #validate(userInputString) {
    this.inputValidator.checkEmpty(userInputString);
    this.inputValidator.checkPrefix(userInputString);
  }

  #isFirstCharDigit() {}

  #register(customDelimiter) {}
}

export default CalculatorController;
