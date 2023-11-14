import { ERROR } from '../constants/error.js';

const DateValidator = {
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

  isValidDate(date) {
    this.isInteger(date);
    this.isValidRange(date);
  },
};

export default DateValidator;
