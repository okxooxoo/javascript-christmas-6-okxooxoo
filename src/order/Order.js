class Order {
  #date;
  #menu;
  #benefit;

  constructor(orderedDate, orderedMenu) {
    this.#date = orderedDate;
    this.#menu = orderedMenu;
    this.#benefit = new Map();
  }

  /**
   * 주말 할인 금액 계산
   */
  calculateWeekendDiscountAmount() {
    return this.#menu.getMainQuantity() * 2023;
  }

  /**
   * 평일 할인 금액 계산
   */
  calculateWeekdayDiscountAmount() {
    return this.#menu.getDessertQuantity() * 2023;
  }

  /**
   * 혜택 내역을 기록
   */
  setBenefit() {
    this.setDdayBenefit();
    this.setWeekendBenefit();
    this.setWeekdayBenefit();
    this.setSpecialBenefit();
    this.setPresentBenefit();
  }

  setDdayBenefit() {
    if (this.#date.isDday()) {
      this.#benefit.set('Dday', this.#date.calculateDdayDiscountAmount());
    }
  }

  setWeekendBenefit() {
    if (this.#date.isWeekend() && this.#menu.getMainQuantity() > 0) {
      this.#benefit.set('weekend', this.calculateWeekendDiscountAmount());
    }
  }

  setWeekdayBenefit() {
    if (this.#date.isWeekday() && this.#menu.getDessertQuantity() > 0) {
      this.#benefit.set('weekday', this.calculateWeekdayDiscountAmount());
    }
  }

  setSpecialBenefit() {
    if (this.#date.isSpecial()) {
      this.#benefit.set('special', 1000);
    }
  }

  setPresentBenefit() {
    if (this.#menu.isPresentEvent()) {
      this.#benefit.set('present', 25000);
    }
  }
}

export default Order;
