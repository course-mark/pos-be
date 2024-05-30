import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { InventoryController } from '@/controllers/inventory.controller';

export class InventoryRoute implements Routes {
  public path = '/inventories';
  public router = Router();
  public inventory = new InventoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.inventory.getInventories);
    this.router.put(`${this.path}/:id`, this.inventory.updateInventory);
  }
}
