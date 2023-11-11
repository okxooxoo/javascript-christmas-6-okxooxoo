class Discount {
  static isDday(date) {
    if (date <= 25) {
      return true;
    }
    return false;
  }

  static isWeekend(date) {
    if ((date - 1) % 7 < 2) {
      return true;
    }
    return false;
  }

  static isSpecial(date) {
    if (date % 7 === 3 || date === 25) {
      return true;
    }
    return false;
  }

  static isPresent(totalOrderAmount) {
    if (totalOrderAmount >= 120000) {
      return true;
    }
    return false;
  }

  static calculateDdayAmount(date) {
    return date * 100 + 900;
  }

  static calculateWeekendAmount(mainQuantity) {
    return mainQuantity * 2023;
  }

  static calculateWeekdayAmount(dessertQuantity) {
    return dessertQuantity * 2023;
  }

  static getSpecialAmount() {
    return 1000;
  }

  static getPresentAmount() {
    return 25000;
  }
}

export default Discount;
