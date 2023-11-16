import { priceWithCommas } from '../utils/priceWithCommas.js';
import { SIGN } from './sign.js';

export const GUIDE = Object.freeze({
  greet: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  preview: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
});

export const READ = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  order:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const TITLE = Object.freeze({
  orderMenu: '<주문 메뉴>',
  totalOrderAmount: '<할인 전 총주문 금액>',
  presentMenu: '<증정 메뉴>',
  benefit: '<혜택 내역>',
  totalBenefitAmount: '<총혜택 금액>',
  paymentAmount: '<할인 후 예상 결제 금액>',
  eventBadge: '<12월 이벤트 배지>',
});

export const CONTENT = Object.freeze({
  menu: (menu, quantity) => `${menu} ${quantity}개`,
  price: (price) => `${priceWithCommas(price)}원`,
});

export const PRESENT = Object.freeze({
  present: CONTENT.menu('샴페인', 1),
  none: SIGN.none,
});

export const BENEFIT = Object.freeze({
  Dday: '크리스마스 디데이 할인: ',
  weekend: '주말 할인: ',
  weekday: '평일 할인: ',
  special: '특별 할인: ',
  present: '증정 이벤트: ',
});

export const EVENT_BADGE = Object.freeze({
  star: '별',
  tree: '트리',
  santa: '산타',
  none: SIGN.none,
});
