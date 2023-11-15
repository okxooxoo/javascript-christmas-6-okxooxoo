import { ERROR } from '../constants/error.js';
import { MENU, DRINK } from '../constants/menu.js';

const Validation = {
  isInteger(date) {
    const integerRegex = new RegExp(/^\d+$/);
    if (!integerRegex.test(date)) {
      throw new Error(ERROR.invalidDate);
    }
  },

  isValidRange(date) {
    if (date < 1 || date > 31) {
      throw new Error(ERROR.invalidDate);
    }
  },

  isValidOrder(order) {
    const orderRegex = new RegExp(/^[가-힣]+-[1-9]\d*$/);
    if (!orderRegex.test(order)) {
      throw new Error(ERROR.invalidOrder);
    }
  },

  isExistMenu(menuArray) {
    menuArray.forEach((menu) => {
      if (!MENU.hasOwnProperty(menu)) {
        throw new Error(ERROR.invalidOrder);
      }
    });
  },

  isDuplicatedMenu(menuArray) {
    const menuSet = new Set(menuArray);
    if (menuArray.length != menuSet.size) {
      throw new Error(ERROR.invalidOrder);
    }
  },

  isOnlyDrinkMenu(menuArray) {
    const allDrink = menuArray.every((menu) => DRINK.hasOwnProperty(menu));

    if (allDrink) {
      throw new Error(ERROR.invalidOrder);
    }
  },

  isLessThan20(quantityArray) {
    const sum = quantityArray.reduce((sum, quantity) => {
      return sum + quantity;
    }, 0);

    if (sum > 20) {
      throw new Error(ERROR.invalidOrder);
    }
  },
};

export default Validation;
