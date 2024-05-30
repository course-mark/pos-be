import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { InvoiceController } from '@/controllers/invoice.controller';

export class InvoiceRoute implements Routes {
  public path = '/invoices';
  public router = Router();
  public invoice = new InvoiceController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.invoice.getAllInvoices);
    this.router.get(`${this.path}`, this.invoice.getInvoiceById);
    this.router.post(`${this.path}`, this.invoice.createInvoice);
  }
}
