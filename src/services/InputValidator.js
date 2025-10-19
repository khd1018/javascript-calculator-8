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

  checkCustomDelimiter(userInputString) {
    const CUSTOM_DELIMITER_PATTERN = /^\/\/(.+)\n/;

    if (!CUSTOM_DELIMITER_PATTERN.test(userInputString)) {
      throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다. (예: //;\\n1;2;3)");
    }

    return;
  }

  checkPrefix(userInputString) {
    const NUMBER_PREFIX_PATTERN = /^[1-9]/;

    if (!userInputString.startsWith("//") && !NUMBER_PREFIX_PATTERN.test(userInputString)) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다. 숫자 또는 // 로 시작해야 합니다.");
    }

    return;
  }
}

export default InputValidator;
