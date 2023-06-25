export const getDiscountedPricePercentage = (originaPrice, discountedPrice) => {
  const discount = originaPrice - discountedPrice;

  const discountPercentage = (discount / originaPrice) * 100;

  return discountPercentage.toFixed(2);
};
