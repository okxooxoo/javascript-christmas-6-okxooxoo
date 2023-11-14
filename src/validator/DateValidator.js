const DateValidator = {
  validate(input) {
    this.isInteger(input);
    this.isValidRange(input);
    const date = parseInt(input);
    return date;
  },
};

export default DateValidator;
