import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Order from '../model/domain/Order.js';
import Benefit from '../model/domain/Benefit.js';
import Receipt from '../model/domain/Receipt.js';

class EventPlanner {
  #order;
  #benefit;
  #receipt;

  async initialize() {
    const { date, order } = await this.#takeOrder();
    this.#order = new Order(order);
    this.#benefit = new Benefit(date, this.#order);
    this.#receipt = new Receipt(this.#benefit);
  }

  async play() {
    const totalOrderAmount = this.#showOrderAmount();
    this.#applyEvents();
    this.#issueReceipt(totalOrderAmount);
  }

  async #takeOrder() {
    OutputView.printGreet();
    const date = await InputView.readDate();
    const order = await InputView.readOrder();
    OutputView.printPreview(date);
    OutputView.printOrderMenu(order);

    return { date, order };
  }

  #showOrderAmount() {
    const totalOrderAmount = this.#order.calculateTotalOrderAmount();
    OutputView.printTotalOrderAmount(totalOrderAmount);

    return totalOrderAmount;
  }

  #applyEvents() {
    const benefitDetails = this.#benefit.getBenefitDetails();
    const present = this.#benefit.getPresentMenu();

    OutputView.printPresentMenu(present);
    OutputView.printBenefitDetails(benefitDetails);
  }

  #issueReceipt(totalOrderAmount) {
    const totalBenefitAmount = this.#receipt.calculateTotalBenefitAmount();
    const paymentAmount = this.#receipt.calculatePaymentAmount(totalOrderAmount);
    const eventBadge = this.#receipt.getEventBadge();

    OutputView.printTotalBenefitAmount(totalBenefitAmount);
    OutputView.printPaymentAmount(paymentAmount);
    OutputView.printEventBadge(eventBadge);
  }
}

export default EventPlanner;
