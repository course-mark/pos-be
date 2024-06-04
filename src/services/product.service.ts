import { Service } from 'typedi';
import { Product } from '@interfaces/product.interface';
import { ProductsModel } from '@models/products.model';

@Service()
export class ProductService {
  public async findAllProducts(options: any): Promise<any> {
    const page = options.page || 1;
    const viewSize = options.viewSize || 5;
    const skip = (page - 1) * viewSize;
    const products: Product[] = await ProductsModel.find().skip(skip).limit(viewSize);
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
}
