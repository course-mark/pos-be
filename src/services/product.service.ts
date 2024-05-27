import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { User } from '@interfaces/users.interface';
import { UserModel } from '@models/users.model';

@Service()
export class ProductService {
  public async findAllProducts(): Promise<any> {
    const users: User[] = await UserModel.find();
    return users;
  }

}
