import { Checkout } from '@/interfaces/checkout.interface';
import { CheckoutService } from '@/services/checkout.service';
import { NextFunction, Request, Response } from 'express';

export class CheckoutController {
  checkout = new CheckoutService();

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCheckoutsData: Checkout[] = await this.checkout.findAllCheckoutData();

      res.status(200).json({ data: findAllCheckoutsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findOne: Checkout = await this.checkout.findOne();

      res.status(200).json({ data: findOne, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  createCheckout = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const createCheckoutList: Checkout = await this.checkout.createCheckout(data);
    res.status(200).json({ data: createCheckoutList, message: 'created successfully' });
  };
}
