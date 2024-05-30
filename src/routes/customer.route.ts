import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { customerController } from '@/controllers/customer.controller';

export class CustomerRoute implements Routes {
  public path = '/customers';
  public router = Router();
  public customer = new customerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.customer.getCustomers);
    this.router.get(`${this.path}/:id`, this.customer.getCustomerById);
    this.router.post(`${this.path}`, this.customer.createCustomer);
    this.router.put(`${this.path}/:id`, this.customer.updateCustomer);
    this.router.delete(`${this.path}/:id`, this.customer.deleteCustomer);
  }
}
