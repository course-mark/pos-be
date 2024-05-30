import { customer } from '@/interfaces/customer.interface';
import { customerServices } from '@/services/customer.service';
import { NextFunction, Request, Response } from 'express';

export class customerController {
  customer = new customerServices();

  getCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCustomersData: customer[] = await this.customer.findAllCustomer();

      res.status(200).json({ data: findAllCustomersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  getCustomerById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerId = req.params.id;
      const findCustomerById: customer = await this.customer.findCustomerById(customerId);

      res.status(200).json({ data: findCustomerById, message: 'findCustomerById' });
    } catch (error) {
      next(error);
    }
  };
  createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const createCustomer: customer = await this.customer.createCustomer(data);
    res.status(200).json({ data: createCustomer, message: 'customerCreated' });
  };
  updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.id;
    const data = req.body;
    const updateCustomer: customer = await this.customer.updateCustomer(customerId, data);
    res.status(200).json({ data: updateCustomer, message: 'customerUpdated' });
  };

  deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    const customerId = req.params.id;
    const deleteCustomer: customer = await this.customer.deleteCustomer(customerId);
    res.status(200).json({ data: deleteCustomer, message: 'customerDeleted' });
  };
}
