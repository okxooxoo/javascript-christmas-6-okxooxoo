import { Console } from '@woowacourse/mission-utils';
import DateValidator from '../validator/DateValidator.js';
import OrderValidator from '../validator/OrderValidator.js';
import { READ } from '../constants/message.js';

const InputView = {
  async readDate() {
    try {
      const input = await Console.readLineAsync(READ.date);
      const date = DateValidator.validate(input);
      return date;
    } catch (err) {
      Console.print(err.message);
      return this.readDate();
    }
  },

  async readOrder() {
    try {
      const input = await Console.readLineAsync(READ.order);
      const order = OrderValidator.validate(input);
      return order;
    } catch (err) {
      Console.print(err.message);
      return this.readOrder();
    }
  },
};

export default InputView;
