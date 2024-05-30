export interface Invoice {
  checkoutId: String;
  invoiceNumber: Number;
  invoiceDate: Date;
  totalAmount: Number;
  tax: Number;
  discount: Number;
}
