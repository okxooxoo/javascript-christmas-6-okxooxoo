import Validation from '../src/validator/Validation.js';

describe('사용자 입력 예외 테스트', () => {
  test.each([[''], ['a']])('정수가 아니면 예외 발생', (input) => {
    expect(() => {
      Validation.isInteger(input);
    }).toThrow('[ERROR]');
  });

  test.each([['0'], ['32']])('유효한 날짜 범위가 아니면 예외 발생', (input) => {
    expect(() => {
      Validation.isValidDayOfMonth(input);
    }).toThrow('[ERROR]');
  });

  test.each([[''], ['매콤파스타'], ['1'], ['-'], ['아이스크림-0']])(
    '유효한 주문 형식이 아니면 예외 발생',
    (input) => {
      expect(() => {
        Validation.isValidOrder(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each([[['아이스크림', '제로사이다']], [['스테이크', '초코케이크']]])(
    '메뉴가 존재하지 않으면 예외 발생',
    (input) => {
      expect(() => {
        Validation.isExistMenu(input);
      }).toThrow('[ERROR]');
    },
  );

  test('메뉴가 중복되면 예외 발생', () => {
    const menuArray = ['아이스크림', '아이스크림', '제로콜라'];

    expect(() => {
      Validation.isDuplicatedMenu(menuArray);
    }).toThrow('[ERROR]');
  });

  test('음료만 주문하면 예외 발생', () => {
    const menuArray = ['제로콜라', '레드와인', '샴페인'];

    expect(() => {
      Validation.isOnlyDrinkMenu(menuArray);
    }).toThrow('[ERROR]');
  });

  test('20개 초과 주문하면 예외 발생', () => {
    const quantityArray = [4, 5, 6, 6];

    expect(() => {
      Validation.isLessThan20(quantityArray);
    }).toThrow('[ERROR]');
  });
});
