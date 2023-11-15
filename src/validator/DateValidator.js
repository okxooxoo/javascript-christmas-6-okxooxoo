import Validation from './Validation.js';

const DateValidator = {
  validate(input) {
    Validation.isInteger(input);
    Validation.isValidDayOfMonth(input);
    const date = parseInt(input);
    return date;
  },
};

export default DateValidator;
