import { model, Schema, Document } from 'mongoose';

const inventorySchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  productId: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    unique: true,
  },
});

export const inventoryModel = model('inventory', inventorySchema);
