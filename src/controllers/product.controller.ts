import { Product } from '@/interfaces/product.interface';
import { ProductService } from '@/services/product.service';
import { NextFunction, Request, Response } from 'express';

export class ProductController {
  public product = new ProductService();

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllProductsData: Product[] = await this.product.findAllProducts();

      res.status(200).json({ data: findAllProductsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ProductId: string = req.params.id;
      const findOneData: Product = await this.product.findProductById(ProductId);

      res.status(200).json({ data: findOneData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Product = req.body;
      const createProductData: Product = await this.product.createProduct(data);

      res.status(201).json({ data: createProductData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const data: Product = req.body;
      const updateProduct: Product = await this.product.updateProduct(productId, data);
      res.status(200).json({ data: updateProduct, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };
  public deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productId = req.params.id;
      const deleteProduct: Product = await this.product.deleteProduct(productId);
      res.status(200).json({ data: deleteProduct, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
