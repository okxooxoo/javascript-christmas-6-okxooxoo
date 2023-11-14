import Validation from './Validation.js';

const DateValidator = {
  validate(input) {
    Validation.isInteger(input);
    Validation.isValidRange(input);
    const date = parseInt(input);
    return date;
  },
};

export default DateValidator;
