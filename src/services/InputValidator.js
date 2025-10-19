class InputValidator {
  checkEmpty(userInput) {
    if (!userInput) {
      throw new Error("[ERROR]잘못된 값을 입력하셨습니다.");
    }

    return;
  }

  checkPositive(numbers) {
    numbers.forEach((number) => {
      if (number <= 0 || Number.isNaN(number)) {
        throw new Error("[ERROR]잘못된 값을 입력하셨습니다");
      }
    });

    return;
  }
}

export default InputValidator;
