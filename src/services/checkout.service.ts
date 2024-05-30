import { Checkout } from '@/interfaces/checkout.interface';
import { checkoutModel } from '@/models/checkout.model';
import { Service } from 'typedi';

@Service()
export class CheckoutService {
  async getAll(): Promise<any> {
    const getAll: Checkout = await checkoutModel.find();
    return getAll;
  }

  async getById(checkoutId: String): Promise<any> {
    const getCheckoutById: Checkout = await checkoutModel.findOne(checkoutId);
    return getCheckoutById;
  }

  async createCheckout(data: Checkout): Promise<any> {
    const createCheckoutList: Checkout = await checkoutModel.create(data);
    return createCheckoutList;
  }
}
