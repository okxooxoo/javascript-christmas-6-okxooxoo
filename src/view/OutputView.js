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

  printPresentMenu(isPresent) {
    Console.print(TITLE.presentMenu);
    if (isPresent) Console.print('샴페인 1개'); // 상수화 필요
    else Console.print(SIGN.none);
    Console.print('');
  },

  printTotalOrderAmount(amount) {
    Console.print(TITLE.totalOrderAmount);
    Console.print(CONTENT.price(amount));
    Console.print('');
  },

  printBenefit(benefitDetails) {
    Console.print(TITLE.benefit);
    if (benefitDetails.size === 0) Console.print(SIGN.none);
    else {
      const benefitArray = Array.from(benefitDetails.entries());
      benefitArray.forEach(([benefit, amount]) => {
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
