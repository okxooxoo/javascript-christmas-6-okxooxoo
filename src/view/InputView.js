import { Console } from '@woowacourse/mission-utils';
import DateValidator from '../validator/DateValidator.js';
import OrderValidator from '../validator/OrderValidator.js';
import { READ } from '../constants/message.js';

const InputView = {
  async readDate() {
    try {
      const date = await Console.readLineAsync(READ.date);
      DateValidator.isValidDate(date); // 검증은 도메인에서,,
      return parseInt(date);
    } catch (err) {
      Console.print(err.message);
      return this.readDate();
    }
  },

  async readOrder() {
    const order = await Console.readLineAsync(READ.order);
    return order;
  },
};

export default InputView;
