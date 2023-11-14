const Discount = {
  calculateDdayAmount(date) {
    return date * 100 + 900;
  },

  calculateWeekAmount(quantity) {
    return quantity * 2023;
  },

  getSpecialAmount() {
    return 1000;
  },

  getPresentAmount() {
    return 25000;
  },

  isDday(date) {
    if (date <= 25) {
      return true;
    }
    return false;
  },

  isWeekend(date) {
    if ((date - 1) % 7 < 2) {
      return true;
    }
    return false;
  },

  isSpecial(date) {
    if (date % 7 === 3 || date === 25) {
      return true;
    }
    return false;
  },

  isPresent(totalOrderAmount) {
    if (totalOrderAmount >= 120000) {
      return true;
    }
    return false;
  },
};

export default Discount;
