const DateValidator = {
  isInteger(date) {
    const integerRegex = new RegExp(/^\d+$/);
    if (!integerRegex.test(date)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  isValidRange(date) {
    if (date < 1 || date > 31) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  isValidDate(date) {
    this.isInteger(date);
    this.isValidRange(date);
  },
};

export default DateValidator;
