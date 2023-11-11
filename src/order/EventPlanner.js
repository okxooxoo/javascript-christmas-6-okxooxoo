import OrderedDate from './OrderedDate.js';
import OrderedMenu from './OrderedMenu.js';

/**
 * 혜택 내역을 관리하는 클래스
 */
class EventPlanner {
  #date;
  #menu;

  constructor(orderedDate, orderedMenu) {
    this.#date = orderedDate;
    this.#menu = orderedMenu;
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

  setBenefit() {
    const benefit = new Map();

    if (this.#date.isDday()) {
      benefit.set(
        '크리스마스 디데이 할인',
        this.#date.calculateDdayDiscountAmount(),
      );
    }
    if (this.#date.isWeekend() && this.#menu.getMainQuantity() > 0) {
      benefit.set('주말 할인', this.calculateWeekendDiscountAmount());
    }
    if (this.#date.isWeekday() && this.#menu.getDessertQuantity() > 0) {
      benefit.set('평일 할인', this.calculateWeekdayDiscountAmount());
    }
    if (this.#date.isSpecial()) {
      benefit.set('특별 할인', 1000);
    }
    if (this.#menu.isPresentEvent()) {
      benefit.set('증정 이벤트', 25000);
    }

    return benefit;
  }
}

export default EventPlanner;
