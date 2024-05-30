import { inventory } from '@/interfaces/inventory.interface';
import { inventoryServices } from '@/services/inventory.sevice';
import { NextFunction, Request, Response } from 'express';

export class InventoryController {
  inventory = new inventoryServices();

  getInventories = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAll: inventory[] = await this.inventory.findAll();

      res.status(200).json({ data: findAll, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  updateInventory = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const inventoryId = req.params.id;
    const updateInventory: inventory = await this.inventory.updateInventory({ data, inventoryId });
    res.status(200).json({
      data: updateInventory,
      message: 'updated',
    });
  };
}
