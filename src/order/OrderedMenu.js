import { APPETIZER, DESSERT, DRINK, MAIN } from '../constants/menu.js';

class OrderedMenu {
  #appetizer;
  #dessert;
  #drink;
  #main;

  constructor(appetizer, dessert, drink, main) {
    this.#appetizer = appetizer;
    this.#dessert = dessert;
    this.#drink = drink;
    this.#main = main;
  }

  /**
   * 주문한 디저트의 수량를 반환
   */
  getDessertQuantity() {
    if (this.#dessert.size === 0) return 0;

    return Array.from(this.#dessert.values()).reduce((total, quantity) => {
      return total + quantity;
    }, 0);
  }

  /**
   * 주문한 메인 메뉴의 수량를 반환
   */
  getMainQuantity() {
    if (this.#main.size === 0) return 0;

    return Array.from(this.#main.values()).reduce((total, quantity) => {
      return total + quantity;
    }, 0);
  }

  /**
   * 카테고리에 따른 주문 금액을 계산
   */
  calculateOrderAmount(category, MENU) {
    if (category.size === 0) return 0;

    return Array.from(category.entries()).reduce((amount, [name, quantity]) => {
      return amount + MENU[name] * quantity;
    }, 0);
  }

  /**
   * 총 주문 금액을 계산
   */
  calculateTotalOrderAmount() {
    let totalAmount = 0;
    totalAmount += calculateOrderAmount(this.#appetizer, APPETIZER);
    totalAmount += calculateOrderAmount(this.#dessert, DESSERT);
    totalAmount += calculateOrderAmount(this.#drink, DRINK);
    totalAmount += calculateOrderAmount(this.#main, MAIN);
    return totalAmount;
  }
}

export default OrderedMenu;
