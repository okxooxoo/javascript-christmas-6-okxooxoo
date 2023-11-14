import Validation from './Validation.js';

const OrderValidator = {
  validate(input) {
    const orderArray = this.toOrderArray(input);
    const orderMap = this.toOrderMap(orderArray);
    this.validateMenu(orderMap);
    this.validateQuantity(orderMap);
    return orderMap;
  },

  toOrderArray(input) {
    const orderArray = input.split(',').map((order) => order.trim());
    orderArray.forEach((order) => Validation.isValidOrder(order));
    return orderArray;
  },

  toOrderMap(orderArray) {
    const orderMap = new Map();
    orderArray.forEach((order) => {
      const [menu, quantity] = order.split('-');
      orderMap.set(menu, parseInt(quantity));
    });
    return orderMap;
  },

  validateMenu(orderMap) {
    const menuArray = Array.from(orderMap.keys());
    Validation.isExistMenu(menuArray);
    Validation.isDuplicatedMenu(menuArray);
    Validation.isOnlyDrinkMenu(menuArray);
  },

  validateQuantity(orderMap) {
    const quantityArray = Array.from(orderMap.values());
    Validation.isLessThan20(quantityArray);
  },
};

export default OrderValidator;
