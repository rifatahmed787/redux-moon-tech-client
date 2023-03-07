import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

export const filterBrand = (brandName) => {
  return {
    type: TOGGLE_BRAND,
    payload: brandName,
  };
};
export const filterStock = () => {
  return {
    type: TOGGLE_STOCK,
  };
};
