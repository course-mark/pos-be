import { customerModel } from '@/models/customer.model';
import { customer } from '@/interfaces/customer.interface';
import { Service } from 'typedi';

@Service()
export class customerServices {
  async findAllCustomer(options: any): Promise<any> {
    const page = options.page || 1;
    const viewSize = options.viewSize || 5;
    const skip = (page - 1) * viewSize;
    /**
 *  {
      $skip: (page - 1) * count,
    },
    {
      $limit: count,
    },
 */
    const findAll = await customerModel.find().skip(skip).limit(viewSize);

    return findAll;
  }

  async findCustomerById(customerId: String): Promise<any> {
    const findOne: customer = await customerModel.findOne({ _id: customerId });
    return findOne;
  }

  public async createCustomer(data: customer): Promise<any> {
    const createdCustomer = await customerModel.create(data);
    return createdCustomer;
  }

  async updateCustomer(customerId: String, data: customer): Promise<any> {
    const updateCustomer = await customerModel.findByIdAndUpdate(customerId, data);
    return updateCustomer;
  }

  async deleteCustomer(customerId: String): Promise<any> {
    const deleteCustomer = await customerModel.findByIdAndDelete(customerId);
    return deleteCustomer;
  }
}
