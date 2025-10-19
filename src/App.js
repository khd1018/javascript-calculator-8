import InputView from "./views/InputView.js";
import OutputView from "./views/outputView.js";
import Calculator from "./services/Calculator.js";
import DelimiterFinder from "./services/DelimiterFinder.js";
import NumberExtractor from "./services/NumberExtractor.js";
import InputValidator from "./services/InputValidator.js";
import CalculatorController from "./controllers/CalculatorController.js";

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
    outputView.printResult(calculatorController.calculateSum(userInputString));
  }
}

export default App;
