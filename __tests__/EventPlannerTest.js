import EventPlanner from "../src/EventPlanner";

describe('증정 이벤트 테스트', () => {
    test('총 주문 금액이 12만 원 이상이면 증정 이벤트 적용', () => {
        const present = checkPresentEvent(120000);
        expect(present).toBeTruthy();
    });

    test('총 주문 금액이 12만 원 미만이면 증정 이벤트 적용 불가', () => {
        const present = checkPresentEvent(119500);
        expect(present).toBeFalsy();
    });

    const checkPresentEvent = (totalOrderAmount) => {
        const eventPlanner = new EventPlanner();
        eventPlanner.setPresentEvent(totalOrderAmount);
        const present = eventPlanner.getBenefitDetails().get('present');
        return present;
    };
});