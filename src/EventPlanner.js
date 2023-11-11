/**
 * 혜택 내역을 관리하는 클래스
 */
class EventPlanner {
    #benefitDetails

    constructor() {
        this.#benefitDetails = new Map();
    }

    getBenefitDetails() {
        return this.#benefitDetails;
    }

    setPresentEvent(totalOrderAmount) {
        if (totalOrderAmount >= 120000) {
            this.#benefitDetails.set('present', true);
        }
    }
}

export default EventPlanner;