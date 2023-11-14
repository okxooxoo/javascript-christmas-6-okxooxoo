import { DESSERT, MAIN, MENU } from '../constants/menu.js';
import OrderValidator from '../validator/OrderValidator.js';

class Order {
  #order;

  constructor(input) {
    this.#order = this.#validate(input);
  }

  /**
   * 주문한 디저트의 수량을 반환
   */
  getDessertQuantity() {
    const menuArray = Array.from(this.#order.keys());
    const desserts = menuArray.filter(menu => DESSERT.hasOwnProperty(menu));
    const dessertQuantity = desserts.reduce((sum, dessert) => {
      return sum + this.#order.get(dessert);
    }, 0);

    return dessertQuantity;
  }

  /**
   * 주문한 메인 메뉴의 수량을 반환
   */
  getMainQuantity() {
    const menuArray = Array.from(this.#order.keys());
    const mains = menuArray.filter(menu => MAIN.hasOwnProperty(menu));
    const mainQuantity = mains.reduce((sum, main) => {
      return sum + this.#order.get(main);
    }, 0);

    return mainQuantity;
  }

  /**
   * 총 주문 금액을 계산
   */
  calculateTotalOrderAmount() {
    const orderArray = Array.from(this.#order.entries());
    const totalOrderAmount = orderArray.reduce(
      (totalAmount, [name, quantity]) => {
        return totalAmount + MENU[name] * quantity;
      }, 0);

    return totalOrderAmount;
  }

  #validate(input) {
    const orderArray = this.#toOrderArray(input);
    const orderMap = this.#toOrderMap(orderArray);
    this.#validateMenu(orderMap);
    this.#validateQuantity(orderMap);
    return orderMap;
  }

  #toOrderArray(input) {
    const orderArray = input.split(',').map(order => order.trim());
    orderArray.forEach(order => OrderValidator.isValidOrder(order));
    return orderArray;
  }

  #toOrderMap(orderArray) {
    const orderMap = new Map();
    orderArray.forEach(order => {
      const [menu, quantity] = order.split('-');
      orderMap.set(menu, parseInt(quantity));
    });
    return orderMap;
  }

  #validateMenu(orderMap) {
    const menuArray = Array.from(orderMap.keys());
    OrderValidator.isExistMenu(menuArray);
    OrderValidator.isDuplicatedMenu(menuArray);
    OrderValidator.isOnlyDrinkMenu(menuArray);
  }

  #validateQuantity(orderMap) {
    const quantityArray = Array.from(orderMap.values());
    OrderValidator.isLessThan20(quantityArray);
  }
}

export default Order;
