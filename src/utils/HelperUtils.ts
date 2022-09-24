import { Discount, ProductDetail } from '~/@types/Product';

export const apiService = () => `${process.env.SHOP_URL}`;
export const truncateString = (string = '', maxLength = 20) =>
  string.length > maxLength ? string.split(' ').slice(0, 20).join(' ') : string;
export const getDiscount = (product: ProductDetail, discounts: Discount[]) =>
  discounts.find((d) => product.type === d.product_type);
