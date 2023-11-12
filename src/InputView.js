import { Console } from '@woowacourse/mission-utils';
import { DateValidator } from './validator/DateValidator.js';

const InputView = {
  async readDate() {
    try {
      const date = await Console.readLineAsync(
        '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
      );
      DateValidator.isValidDate(date);
      return parseInt(date);
    } catch (err) {
      Console.print(err.message);
      return this.readDate();
    }
  },
};

export default InputView;
