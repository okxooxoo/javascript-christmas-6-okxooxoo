const OrderValidator = {
  validate(input) {
    const orderArray = this.toOrderArray(input);
    const orderMap = this.toOrderMap(orderArray);
    this.validateMenu(orderMap);
    this.validateQuantity(orderMap);
    return orderMap;
  },

  toOrderArray(input) {
    const orderArray = input.split(',').map(order => order.trim());
    orderArray.forEach(order => OrderValidator.isValidOrder(order));
    return orderArray;
  },

  toOrderMap(orderArray) {
    const orderMap = new Map();
    orderArray.forEach(order => {
      const [menu, quantity] = order.split('-');
      orderMap.set(menu, parseInt(quantity));
    });
    return orderMap;
  },

  validateMenu(orderMap) {
    const menuArray = Array.from(orderMap.keys());
    OrderValidator.isExistMenu(menuArray);
    OrderValidator.isDuplicatedMenu(menuArray);
    OrderValidator.isOnlyDrinkMenu(menuArray);
  },

  validateQuantity(orderMap) {
    const quantityArray = Array.from(orderMap.values());
    OrderValidator.isLessThan20(quantityArray);
  },
};

export default OrderValidator;
