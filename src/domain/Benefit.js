import { Discount } from './Discount.js';

class Benefit {
  #date;
  #order;

  constructor(date, order) {
    this.#date = date;
    this.#order = order;
  }

  getBenefitDetails() {
    const benefitDetails = new Map();

    this.setDdayBenefit(benefitDetails);
    this.setWeekendBenefit(benefitDetails);
    this.setWeekdayBenefit(benefitDetails);
    this.setSpecialBenefit(benefitDetails);
    this.setPresentBenefit(benefitDetails);

    return benefitDetails;
  }

  setDdayBenefit(benefitDetails) {
    if (Discount.isDday(this.#date)) {
      benefitDetails.set('Dday', Discount.calculateDdayAmount(this.#date));
    }
  }

  setWeekendBenefit(benefitDetails) {
    const mainQuantity = this.#order.getMainQuantity();
    if (Discount.isWeekend(this.#date) && mainQuantity > 0) {
      benefitDetails.set(
        'weekend',
        Discount.calculateWeekendAmount(mainQuantity),
      );
    }
  }

  setWeekdayBenefit(benefitDetails) {
    const dessertQuantity = this.#order.getDessertQuantity();
    if (Discount.isWeekday(this.#date) && dessertQuantity > 0) {
      benefitDetails.set(
        'weekday',
        Discount.calculateWeekdayAmount(dessertQuantity),
      );
    }
  }

  setSpecialBenefit(benefitDetails) {
    if (Discount.isSpecial(this.#date)) {
      benefitDetails.set('special', Discount.getSpecialAmount());
    }
  }

  setPresentBenefit(benefitDetails) {
    const totalOrderAmount = this.#order.calculateTotalOrderAmount();
    if (Discount.isPresent(totalOrderAmount)) {
      benefitDetails.set('present', Discount.getPresentAmount());
    }
  }
}

export default Benefit;
