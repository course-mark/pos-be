import { model, Schema, Document } from 'mongoose';

const checkoutSchema: Schema = new Schema({
  customerId: {
    type: String,
    required: true,
  },
  products: {
    type: String,
    required: true,
    unique: true,
  },

  totalAmount: {
    type: Number,
    required: true,
    unique: true,
  },

  paymentStatus: {
    type: String,
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

export const checkoutModel = model('checkout', checkoutSchema);
