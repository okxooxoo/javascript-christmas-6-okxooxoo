import { DESSERT, MAIN, MENU } from '../constants/menu.js';
import OrderValidator from '../validator/OrderValidator.js';

class Order {
  #order;

  constructor(order) {
    OrderValidator.validateMenu(order);
    OrderValidator.validateQuantity(order);
    this.#order = order;
  }

  getDessertQuantity() {
    const menuArray = Array.from(this.#order.keys());
    const desserts = menuArray.filter((menu) => DESSERT.hasOwnProperty(menu));
    const dessertQuantity = desserts.reduce((sum, dessert) => {
      return sum + this.#order.get(dessert);
    }, 0);

    return dessertQuantity;
  }

  getMainQuantity() {
    const menuArray = Array.from(this.#order.keys());
    const mains = menuArray.filter((menu) => MAIN.hasOwnProperty(menu));
    const mainQuantity = mains.reduce((sum, main) => {
      return sum + this.#order.get(main);
    }, 0);

    return mainQuantity;
  }

  calculateTotalOrderAmount() {
    const orderArray = Array.from(this.#order.entries());
    const totalOrderAmount = orderArray.reduce((totalAmount, [name, quantity]) => {
      return totalAmount + MENU[name] * quantity;
    }, 0);

    return totalOrderAmount;
  }
}

export default Order;
