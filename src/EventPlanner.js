/**
 * 혜택 내역을 관리하는 클래스
 */
class EventPlanner {
    #benefitDetails

    constructor() {
        this.#benefitDetails = new Map();
    }

    isPresentEvent(totalOrderAmount) {
        if (totalOrderAmount >= 120000) return true;
        return false;
    }

    setPresentEvent() {
        if (this.isPresentEvent()) {
            this.#benefitDetails.set('present', true);
        }
    }
}

export default EventPlanner;