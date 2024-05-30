import { Invoice } from '@/interfaces/invoice.interface';
import { invoiceModel } from '@/models/Invoice.model';
import { Service } from 'typedi';

@Service()
export class InvoiceService {
  async getAllInvoices(): Promise<any> {
    const getAll: Invoice = await invoiceModel.find();
    return getAll;
  }

  async getById(invoiceId: String): Promise<any> {
    const getOne: Invoice = await invoiceModel.findById({ invoiceId });
    return getOne;
  }

  async createInvoice(data: Invoice): Promise<any> {
    const createdInvoice: Invoice = await invoiceModel.create(data);
    return createdInvoice;
  }
}
