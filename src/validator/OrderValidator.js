import { ERROR } from '../constants/error.js';
import { MENU, DRINK } from '../constants/menu.js';

const OrderValidator = {
  isValidOrder(order) {
    const orderRegex = new RegExp(/^[가-힣]+-[1-9]\d*$/);
    if (!orderRegex.test(order)) {
      throw new Error(ERROR.inValidOrder);
    }
  },

  isExistMenu(menus) {
    const existMenu = MENU.keys();
    menus.forEach(menu => {
      if (!existMenu.includes(menu)) {
        throw new Error(ERROR.inValidOrder);
      }
    });
  },

  isDuplicatedMenu(menus) {
    const menuSet = new Set(menus);
    if (menus.length != menuSet.size) {
      throw new Error(ERROR.inValidOrder);
    }
  },

  isOnlyDrinkMenu(menus) {
    const allDrink = menus.every(menu => DRINK.includes(menu));

    if (allDrink) {
      throw new Error(ERROR.inValidOrder);
    }
  },

  isLessThan20(quantitys) {
    const sum = quantitys.reduce((sum, quantity) => {
      return sum + quantity;
    }, 0);

    if (sum > 20) {
      throw new Error(ERROR.inValidOrder);
    }
  },
};

export default OrderValidator;
