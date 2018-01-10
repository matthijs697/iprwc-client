import {Product} from '../product/product';

export class CartItem {
  constructor(
    public product: Product,
    public amount: number)
  { }
}
