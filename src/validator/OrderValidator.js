import { ERROR } from '../constants/error.js';
import { MENU, DRINK } from '../constants/menu.js';

const OrderValidator = {
  isValidOrder(order) {
    const orderRegex = new RegExp(/^[가-힣]+-[1-9]\d*$/);
    if (!orderRegex.test(order)) {
      throw new Error(ERROR.inValidOrder);
    }
  },

  isExistMenu(menuArray) {
    menuArray.forEach(menu => {
      if (!MENU.hasOwnProperty(menu)) {
        throw new Error(ERROR.inValidOrder);
      }
    });
  },

  isDuplicatedMenu(menuArray) {
    const menuSet = new Set(menuArray);
    if (menuArray.length != menuSet.size) {
      throw new Error(ERROR.inValidOrder);
    }
  },

  isOnlyDrinkMenu(menuArray) {
    const allDrink = menuArray.every(menu => DRINK.hasOwnProperty(menu));

    if (allDrink) {
      throw new Error(ERROR.inValidOrder);
    }
  },

  isLessThan20(quantityArray) {
    const sum = quantityArray.reduce((sum, quantity) => {
      return sum + quantity;
    }, 0);

    if (sum > 20) {
      throw new Error(ERROR.inValidOrder);
    }
  },
};

export default OrderValidator;
