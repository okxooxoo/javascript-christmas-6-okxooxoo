import { DESSERT, MAIN, MENU } from '../constants/menu.js';
import OrderValidator from '../validator/OrderValidator.js';

class Order {
  #order;

  constructor(order) {
    OrderValidator.validateMenu(order);
    OrderValidator.validateQuantity(order);
    this.#order = order;
  }

  /**
   * 총 주문 금액을 계산
   */
  calculateTotalOrderAmount() {
    const orderArray = Array.from(this.#order.entries());
    const totalOrderAmount = orderArray.reduce((totalAmount, [name, quantity]) => {
      return totalAmount + MENU[name] * quantity;
    }, 0);

    return totalOrderAmount;
  }

  /**
   * 주문한 디저트 메뉴의 수량을 반환
   */
  getDessertQuantity() {
    const menuArray = Array.from(this.#order.keys());
    const desserts = menuArray.filter((menu) => DESSERT.hasOwnProperty(menu));
    const dessertQuantity = desserts.reduce((totalQuantity, dessert) => {
      return totalQuantity + this.#order.get(dessert);
    }, 0);

    return dessertQuantity;
  }

  /**
   * 주문한 메인 메뉴의 수량을 반환
   */
  getMainQuantity() {
    const menuArray = Array.from(this.#order.keys());
    const mains = menuArray.filter((menu) => MAIN.hasOwnProperty(menu));
    const mainQuantity = mains.reduce((totalQuantity, main) => {
      return totalQuantity + this.#order.get(main);
    }, 0);

    return mainQuantity;
  }
}

export default Order;
