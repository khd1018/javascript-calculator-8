import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getUserInput() {
    const userInputString = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    return userInputString;
  }
}

export default InputView;
