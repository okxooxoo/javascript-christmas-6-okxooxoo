import { Console } from '@woowacourse/mission-utils';
import { GUIDE, TITLE, CONTENT } from '../constants/message.js';
import { SIGN } from '../constants/sign.js';

const OutputView = {
  printGreet() {
    Console.print(GUIDE.greet);
  },

  printPreview(date) {
    Console.print(GUIDE.preview(date));
  },

  printOrderMenu(order) {
    Console.print(TITLE.orderMenu);
    const orderArray = Array.from(order.entries());
    orderArray.forEach(([menu, quantity]) => {
      Console.print(CONTENT.menu(menu, quantity));
    });
    Console.print('');
  },

  printPresentMenu(present) {
    Console.print(TITLE.presentMenu);
    Console.print(present);
    Console.print('');
  },

  printTotalOrderAmount(amount) {
    Console.print(TITLE.totalOrderAmount);
    Console.print(CONTENT.price(amount));
    Console.print('');
  },

  printBenefitDetails(benefitDetails) {
    Console.print(TITLE.benefit);
    if (benefitDetails.size === 0) Console.print(SIGN.none);
    else {
      Array.from(benefitDetails.entries()).forEach(([benefit, amount]) => {
        Console.print(benefit + SIGN.minus + CONTENT.price(amount));
      });
    }
    Console.print('');
  },

  printTotalBenefitAmount(amount) {
    Console.print(TITLE.totalBenefitAmount);
    if (amount === 0) Console.print(CONTENT.price(amount));
    else Console.print(SIGN.minus + CONTENT.price(amount));
    Console.print('');
  },

  printPaymentAmount(amount) {
    Console.print(TITLE.paymentAmount);
    Console.print(CONTENT.price(amount));
    Console.print('');
  },

  printEventBadge(bagde) {
    Console.print(TITLE.eventBadge);
    Console.print(bagde);
    Console.print('');
  },
};

export default OutputView;
