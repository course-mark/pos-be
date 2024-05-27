import { Router } from 'express';
import { ProductController } from '@controllers/product.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ProductRoute implements Routes {
  public path = '/products';
  public router = Router();
  public product = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.product.getProducts);
    this.router.get(`${this.path}/:id`, this.product.getUserById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto), this.product.createUser);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateUserDto, true), this.product.updateUser);
    this.router.delete(`${this.path}/:id`, this.product.deleteUser);
  }
}
