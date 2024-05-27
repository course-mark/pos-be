import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const customerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  address: {
    type: String,
    unique: true,
  },
  city: {
    type: String,
    unique: true,
  },
  state: {
    type: String,
    unique: true,
  },
  country: {
    type: String,
    unique: true,
  },
});

export const customerModel = model('customer', customerSchema);
