import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { CheckoutController } from '@/controllers/checkout.controller';

export class CheckoutRoute implements Routes {
  public path = '/checkouts';
  public router = Router();
  public checkout = new CheckoutController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.checkout.createCheckout);
    this.router.get(`${this.path}`, this.checkout.findAll);
    this.router.get(`${this.path}/:id`, this.checkout.findById);
  }
}
