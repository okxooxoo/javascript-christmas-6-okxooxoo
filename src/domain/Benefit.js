import { Discount } from './Discount.js';
import DateValidator from '../validator/DateValidator.js';

class Benefit {
  #date;
  #order;

  constructor(date, order) {
    DateValidator.validate(date);
    this.#date = date;
    this.#order = order;
  }

  getBenefit() {
    const benefit = new Map();

    this.#setDdayBenefit(benefit);
    this.#setWeekendBenefit(benefit);
    this.#setWeekdayBenefit(benefit);
    this.#setSpecialBenefit(benefit);
    this.#setPresentBenefit(benefit);

    return benefit;
  }

  #setDdayBenefit(benefit) {
    if (Discount.isDday(this.#date)) {
      benefit.set('Dday', Discount.calculateDdayAmount(this.#date));
    }
  }

  #setWeekendBenefit(benefit) {
    const mainQuantity = this.#order.getMainQuantity();
    if (Discount.isWeekend(this.#date) && mainQuantity > 0) {
      benefit.set('weekend', Discount.calculateWeekAmount(mainQuantity));
    }
  }

  #setWeekdayBenefit(benefit) {
    const dessertQuantity = this.#order.getDessertQuantity();
    if (Discount.isWeekday(this.#date) && dessertQuantity > 0) {
      benefit.set('weekday', Discount.calculateWeekAmount(dessertQuantity));
    }
  }

  #setSpecialBenefit(benefit) {
    if (Discount.isSpecial(this.#date)) {
      benefit.set('special', Discount.getSpecialAmount());
    }
  }

  #setPresentBenefit(benefit) {
    const totalOrderAmount = this.#order.calculateTotalOrderAmount();
    if (Discount.isPresent(totalOrderAmount)) {
      benefit.set('present', Discount.getPresentAmount());
    }
  }
}

export default Benefit;
