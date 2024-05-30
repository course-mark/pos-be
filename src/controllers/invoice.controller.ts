import { Invoice } from '@/interfaces/invoice.interface';
import { InvoiceService } from '@/services/invoice.service';
import { NextFunction, Request, Response } from 'express';

export class InvoiceController {
  invoice = new InvoiceService();

  getAllInvoices = async (req: Request, res: Response, next: NextFunction) => {
    const getAll: Invoice[] = await this.invoice.getAllInvoices();
    res.status(200).json({
      data: getAll,
      message: 'Got all invoices',
    });
  };

  getInvoiceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const invoiceId: string = req.params.id;
      const findOne: Invoice = await this.invoice.getInvoiceById(invoiceId);

      res.status(200).json({ data: findOne, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  createInvoice = async (req: Request, res: Response, next: NextFunction) => {
    const data: Invoice = req.body;
    const createInvoice: Invoice = await this.invoice.createInvoice(data);
    res.status(200).json({ data: createInvoice, message: 'created' });
  };
}
