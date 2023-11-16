import { ERROR } from '../constants/error.js';
import { MENU, DRINK } from '../constants/menu.js';

const Validation = {
  isInteger(input) {
    const integerRegex = new RegExp(/^\d+$/);
    if (!integerRegex.test(input)) {
      throw new Error(ERROR.invalidDate);
    }
  },

  isValidDayOfMonth(input) {
    if (input < 1 || input > 31) {
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
    if (!menuArray.every((menu) => MENU.hasOwnProperty(menu))) {
      throw new Error(ERROR.invalidOrder);
    }
  },

  isDuplicatedMenu(menuArray) {
    const menuSet = new Set(menuArray);
    if (menuArray.length != menuSet.size) {
      throw new Error(ERROR.invalidOrder);
    }
  },

  isOnlyDrinkMenu(menuArray) {
    if (menuArray.every((menu) => DRINK.hasOwnProperty(menu))) {
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
