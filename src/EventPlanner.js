import InputView from './view/InputView.js';
import Order from './domain/Order.js';
import Benefit from './domain/Benefit.js';
import OutputView from './view/OutputView.js';
import Receipt from './domain/Receipt.js';

class EventPlanner {
  async play() {
    OutputView.printGreet();
    const date = await InputView.readDate();

    const orderInput = await InputView.readOrder();
    OutputView.printPreview(date);

    const order = new Order(orderInput);

    OutputView.printOrderMenu(orderInput);
    // 총 주문 금액 출력
    const totalOrderAmount = order.calculateTotalOrderAmount();
    OutputView.printTotalOrderAmount(totalOrderAmount);
    // 증정 메뉴 출력
    if (totalOrderAmount >= 10000) {
      if (totalOrderAmount >= 120000) OutputView.printPresentMenu();
      const benefit = new Benefit(date, order);
      const benefitDetails = benefit.getBenefit();
      OutputView.printBenefit(benefitDetails);

      const receipt = new Receipt(benefitDetails);
      const totalBenefitAmount = receipt.calculateTotalBenefitAmount();
      OutputView.printTotalBenefitAmount(totalBenefitAmount);

      const paymentAmount = receipt.calculatePaymentAmount(totalOrderAmount);
      OutputView.printPaymentAmount(paymentAmount);

      const eventBadge = receipt.getEventBadge();
      OutputView.printEventBadge(eventBadge);
    }
  }
}

export default EventPlanner;
