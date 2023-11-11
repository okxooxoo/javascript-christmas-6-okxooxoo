class OrderedDate {
  #date;

  constructor(date) {
    this.#date = date;
  }

  // Dday 할인 적용되는지
  isDday() {
    if (this.#date <= 25) return true;
    return false;
  }

  // 주말 할인 적용되는지
  isWeekend() {
    if ((this.#date - 1) % 7 < 2) return true;
    return false;
  }

  // 특별 할인 적용되는지
  isSpecial() {
    if (this.#date % 7 === 3 || this.#date === 25) return true;
    return false;
  }
}

export default OrderedDate;
