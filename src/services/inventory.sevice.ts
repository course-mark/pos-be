import { inventory } from '@/interfaces/inventory.interface';
import { inventoryModel } from '@/models/Inventory.model';
import { Service } from 'typedi';

@Service()
export class inventoryServices {
  async findAll(): Promise<any> {
    const findAll: inventory = await inventoryModel.find();
    return findAll;
  }

  async updateInventory(data: inventory, inventoryId: String): Promise<any> {
    const updatedInventory: inventory = await inventoryModel.findByIdAndUpdate({ data, inventoryId });
    return updatedInventory;
  }
}
