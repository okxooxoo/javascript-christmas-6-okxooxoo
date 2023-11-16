import { SIGN } from "../constants/sign.js";

export const priceWithCommas = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, SIGN.comma);
};
