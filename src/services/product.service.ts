import { Service } from 'typedi';
<<<<<<< HEAD
import { Product } from '@interfaces/product.interface';
import { ProductsModel } from '@models/products.model';

@Service()
export class ProductService {
  public async findAllProducts(): Promise<any> {
    const products: Product[] = await ProductsModel.find();
    return products;
  }
  public async findProductById(productId: String): Promise<any> {
    const findProduct: Product = await ProductsModel.findOne({ _id: productId });
    return findProduct;
  }

  public async createProduct(data: Product): Promise<any> {
    const createdProduct = await ProductsModel.create(data);
    return createdProduct;
  }

  public async updateProduct(productId: String, data: Product): Promise<any> {
    const updateProduct = await ProductsModel.findByIdAndUpdate(productId, data);
    return updateProduct;
  }

  public async deleteProduct(productId: string): Promise<any> {
    const deleteProduct = await ProductsModel.findByIdAndDelete(productId);

    return deleteProduct;
  }
=======

@Service()
export class ProductService {
  // TODO: Implement the logic to get all products
  // public getProducts = async ()=> {}
  // TODO: Implement the logic to get a product by id
  // public getProductById = async ()=> {}
  // TODO: Implement the logic to create a product
  // public createProduct = async ()=> {}
  // TODO: Implement the logic to update a product
  // public updateProduct = async ()=> {}
  // TODO: Implement the logic to delete a product
  // public deleteProduct = async ()=> {}
>>>>>>> 9525f7c0093b3967629d9fdd170f6c1ee8fe5a65
}
