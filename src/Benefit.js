class Benefit {
  #benefit;

  constructor(benefit) {
    this.#benefit = benefit;
  }

  /**
   * 총 혜택 금액 계산
   */
  calculateTotalBenefitAmount() {
    return Array.from(this.#benefit.values()).reduce((total, amount) => {
      return total + amount;
    }, 0);
  }

  /**
   * 할인 후 예상 결제 금액 계산
   */
  calculatePaymentAmount(orderAmount) {
    const benefitAmount = this.calculateTotalBenefitAmount();
    const paymentAmount = orderAmount - benefitAmount;
    if (orderAmount >= 120000) paymentAmount -= 25000;
    return paymentAmount;
  }

  /**
   * 이벤트 배지 부여
   */
  getEventBadge() {
    const benefitAmount = this.calculateTotalBenefitAmount();
    if (benefitAmount >= 20000) return '산타';
    if (benefitAmount >= 10000) return '트리';
    if (benefitAmount >= 5000) return '별';
    return '없음';
  }
}

export default Benefit;
