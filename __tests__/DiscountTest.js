import Discount from '../src/domain/Discount.js';

describe('할인 테스트', () => {
  test.each([[1], [2], [8], [9], [15], [16], [22], [23], [29], [30]])(
    '주말이면 true을 반환',
    (date) => {
      expect(Discount.isWeekend(date)).toBeTruthy();
    },
  );

  test.each([[3], [7], [10], [14], [17], [21], [24], [28], [31]])(
    '평일이면 false을 반환',
    (date) => {
      expect(Discount.isWeekend(date)).toBeFalsy();
    },
  );

  test.each([[3], [10], [17], [24], [31], [25]])(
    '특별 할인 적용되면 true을 반환',
    (date) => {
    expect(Discount.isSpecial(date)).toBeTruthy();
  });

  test('디데이 할인 금액 계산', () => {
    const date = 25;
    const answerAmount = 3400;
    expect(Discount.calculateDdayAmount(date)).toBe(answerAmount);
  });
});
