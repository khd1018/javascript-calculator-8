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
        throw new Error("[ERROR]잘못된 값을 입력하셨습니다. 양수와 구분자를 정확히 입력해주세요.");
      }
    });

    return;
  }

  checkFormat(customDelimiterString) {
    if (!customDelimiterString.startsWith("//") || !customDelimiterString.endsWith("\n")) {
      throw new Error("[ERROR] 잘못된 커스텀 구분자 입력 형식입니다.");
    }

    return;
  }
}

export default InputValidator;
