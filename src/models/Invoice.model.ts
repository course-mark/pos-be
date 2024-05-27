import { model, Schema, Document } from 'mongoose';

const invoiceSchema: Schema = new Schema({

  checkoutId: {
    type: String,
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  invoiceDate: {
    type: Date,
    required: true,
    unique: true,
  },
  
  totalAmount: {
    type: Number,
    required: true,
    unique: true,
  },
  tax: {
    type: Number,
    required: true,
    unique: true,
  },
  discount: {
    type: Number,
    required: true,
    unique: true,
  },
  });

export const invoiceModel = model('invoice', invoiceSchema);