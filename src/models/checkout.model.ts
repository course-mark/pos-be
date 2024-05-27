import mongoose, { model, Schema, Document } from 'mongoose';

const checkoutSchema: Schema = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],

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
