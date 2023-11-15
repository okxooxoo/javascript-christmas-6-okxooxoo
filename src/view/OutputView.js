import { Console } from '@woowacourse/mission-utils';
import { GUIDE, TITLE, CONTENT } from '../constants/message.js';

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

  printTotalOrderAmount(amount) {
    Console.print(TITLE.totalOrderAmount);
    Console.print(CONTENT.price(amount));
    Console.print('');
  },

  printPresentMenu() {
    Console.print(TITLE.presentMenu);
    Console.print('샴페인 1개'); // 상수화 필요
    Console.print('');
  },

  printBenefit(benefit) {
    Console.print(TITLE.benefit);
    const benefitArray = Array.from(benefit.entries());
    benefitArray.forEach(([benefit, amount]) => {
      Console.print(benefit + CONTENT.price(amount));
    });
    Console.print('');
  },

  printTotalBenefitAmount(amount) {
    Console.print(TITLE.totalBenefitAmount);
    Console.print('-' + CONTENT.price(amount));
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
