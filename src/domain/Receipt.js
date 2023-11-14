import { EVENT_BADGE } from '../constants/message.js';

class Receipt {
  #benefit;

  constructor(benefit) {
    this.#benefit = benefit;
  }

  /**
   * 총 혜택 금액 계산
   */
  calculateTotalBenefitAmount() {
    const benefitAmount = Array.from(this.#benefit.values());
    const totalBenefitAmount = benefitAmount.reduce((total, amount) => {
      return total + amount;
    }, 0);
    return totalBenefitAmount;
  }

  /**
   * 할인 후 예상 결제 금액 계산
   */
  calculatePaymentAmount(totalOrderAmount) {
    const totalBenefitAmount = this.calculateTotalBenefitAmount();
    const paymentAmount = totalOrderAmount - totalBenefitAmount;
    if (totalOrderAmount >= 120000) paymentAmount -= 25000;
    return paymentAmount;
  }

  /**
   * 이벤트 배지 부여
   */
  getEventBadge() {
    const totalBenefitAmount = this.calculateTotalBenefitAmount();
    if (totalBenefitAmount >= 20000) return EVENT_BADGE.santa;
    if (totalBenefitAmount >= 10000) return EVENT_BADGE.tree;
    if (totalBenefitAmount >= 5000) return EVENT_BADGE.star;
    return EVENT_BADGE.none;
  }
}

export default Receipt;
