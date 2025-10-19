class Calculator {
  constructor() {}

  sum(numbers) {
    return numbers.reduce((sumResult, number) => {
      return sumResult + number;
    }, 0);
  }
}

export default Calculator;
