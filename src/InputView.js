import { Console } from '@woowacourse/mission-utils';
import DateValidator from './validator/DateValidator.js';
import OrderValidator from './validator/OrderValidator.js';
import { READ } from './constants/message.js';

const InputView = {
  async readDate() {
    try {
      const date = await Console.readLineAsync(READ.date);
      DateValidator.isValidDate(date);
      return parseInt(date);
    } catch (err) {
      Console.print(err.message);
      return this.readDate();
    }
  },

  async readOrder() {
    try {
      const order = await Console.readLineAsync(READ.order);
      OrderValidator.isValidOrder(order);
      return order;
    } catch (err) {
      console.print(err.message);
      return this.readOrder();
    }
  },
};

export default InputView;
