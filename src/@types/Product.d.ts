export interface ProductDetail {
  id: number;
  type: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  discount?: Discount;
}

export interface Discount {
  id: number;
  valid: boolean;
  type: string;
  product_type: string;
  value: number;
  reward: number;
}

export interface GetProductsResponse {
  products: ProductDetail[];
  discounts: Discount[];
  total: number;
}

export interface CartProduct extends ProductDetail {
  discounts: Discount[];
  totalQuantity: number;
  totalPrice: number;
  discountPrice: number;
  discountQuantity: number;
  finalQuantity: number;
  finalPrice: number;
}

export interface ShoppingCart {
  products: Record<ProductDetail['type'], CartProduct>;
  totalQuantity: number;
  totalPrice: number;
  totalUserQuantity: number;
}
