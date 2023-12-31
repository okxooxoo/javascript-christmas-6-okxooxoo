import { EVENT_BADGE } from '../../constants/message.js';
import Discount from '../Discount.js';

class Receipt {
  #benefit;

  constructor(benefit) {
    this.#benefit = benefit;
  }

  /**
   * 총 혜택 금액 계산
   */
  calculateTotalBenefitAmount() {
    const benefitDetails = this.#benefit.getBenefitDetails();
    const benefitAmount = Array.from(benefitDetails.values());
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
    let paymentAmount = totalOrderAmount - totalBenefitAmount;
    if (Discount.isPresent(totalOrderAmount)) paymentAmount += 25000;
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
