import { MENU } from '../constants/menu';

/**
 * 주문 정보를 관리하는 클래스
 */
class Order {
  #date;
  #dishes;

  constructor(date, dishes) {
    this.#date = date;
    this.#dishes = dishes;
  }

  // 음식과 관련
  getDessertCount() {
    return Array.from(this.#dishes.keys()).filter(key => {
      MENU.dessert.hasOwnProperty(key);
    }).length;
  }

  // 음식과 관련
  getMainCount() {
    return Array.from(this.#dishes.keys()).filter(key => {
      MENU.main.hasOwnProperty(key);
    }).length;
  }

  // 날짜와 관련
  isWeekend() {
    if ((this.#date - 1) % 7 < 2) return true;
    return false;
  }

  // 날짜와 관련
  isSpecial() {
    if (this.#date % 7 === 3 || this.#date === 25) return true;
    return false;
  }

  // 날짜와 관련
  calculateDdayDiscountAmount() {
    // 25일 이하여야 함
    return this.#date * 100 + 900;
  }

  // 음식 날짜 둘다 관련
  calculateWeekDiscountAmount() {
    if (this.isWeekend()) {
      return this.getMainCount() * 2023;
    }
    return this.getDessertCount() * 2023;
  }

  // 날짜와 관련
  calculateSpecialDiscountAmount() {
    if (this.isSpecial()) {
      return 1000;
    }
  }

  // 음식과 관련
  calculateTotalOrderAmount() {
    // 총 주문 금액 계산
  }
}

export default Order;
