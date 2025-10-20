import InputView from "./InputView.js";
import OutputView from "./outputView.js";
import Calculator from "./Calculator.js";
import DelimiterFinder from "./DelimiterFinder.js";
import NumberExtractor from "./NumberExtractor.js";
import InputValidator from "./InputValidator.js";
import CalculatorController from "./CalculatorController.js";

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const calculator = new Calculator();
    const delimiterFinder = new DelimiterFinder();
    const numberExtractor = new NumberExtractor();
    const inputValidator = new InputValidator();
    const calculatorController = new CalculatorController(calculator, delimiterFinder, numberExtractor, inputValidator);

    const userInputString = await inputView.getUserInput();
    outputView.printResult(calculatorController.getResult(userInputString));
  }
}

export default App;
