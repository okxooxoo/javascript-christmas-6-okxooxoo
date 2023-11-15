import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Order from './domain/Order.js';
import Benefit from './domain/Benefit.js';
import Receipt from './domain/Receipt.js';
import Discount from './domain/Discount.js';

class EventPlanner {
  async play() {
    // 돌아는 간다....
    const { date, orderMap } = await this.guestEnter();
    const order = new Order(orderMap);
    const totalOrderAmount = order.calculateTotalOrderAmount();

    OutputView.printTotalOrderAmount(totalOrderAmount);

    const benefit = new Benefit(date, order);
    const benefitDetails = benefit.getBenefitDetails();

    const isPresent = Discount.isPresent(totalOrderAmount);

    OutputView.printPresentMenu(isPresent);

    OutputView.printBenefit(benefitDetails);

    const receipt = new Receipt(benefit);
    let totalBenefitAmount = receipt.calculateTotalBenefitAmount();
    let paymentAmount = receipt.calculatePaymentAmount(totalOrderAmount);
    let eventBadge = receipt.getEventBadge();

    OutputView.printTotalBenefitAmount(totalBenefitAmount);
    OutputView.printPaymentAmount(paymentAmount);
    OutputView.printEventBadge(eventBadge);
  }

  async guestEnter() {
    OutputView.printGreet();
    const date = await InputView.readDate();
    const orderMap = await InputView.readOrder();
    OutputView.printPreview(date);
    OutputView.printOrderMenu(orderMap);

    return { date, orderMap };
  }

  // takeOrder(orderMap) {
  //   const order = new Order(orderMap);
  //   const totalOrderAmount = order.calculateTotalOrderAmount();
  //   OutputView.printTotalOrderAmount(totalOrderAmount);

  //   return order;
  // }

  // applyEvents(date, order) {
  //   const benefit = new Benefit(date, order);
  //   const receipt = new Receipt(benefit);
  //   const benefitDetails = benefit.setBenefitDetails();
  //   OutputView.printBenefit(benefitDetails);

  //   return benefitDetails;
  // }

  // applyPresentEvent(totalOrderAmount) {
  //   if (totalOrderAmount >= 120000) {
  //     OutputView.printPresentMenu();
  //   }
  // }

  // issueReceipt(benefitDetails, totalOrderAmount) {
  //   const receipt = new Receipt(benefitDetails);
  //   const totalBenefitAmount = receipt.calculateTotalBenefitAmount();
  //   const paymentAmount = receipt.calculatePaymentAmount(totalOrderAmount);
  //   const eventBadge = receipt.getEventBadge();

  //   OutputView.printTotalBenefitAmount(totalBenefitAmount);
  //   OutputView.printPaymentAmount(paymentAmount);
  //   OutputView.printEventBadge(eventBadge);
  // }
}

export default EventPlanner;
