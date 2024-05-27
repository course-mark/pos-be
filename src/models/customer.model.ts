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
    required: true,
    unique: true,
  },
  address: {
    type: String                                                                                                                                                    ,
    required: true,
    unique: true,
  },
  city: {
    type: String                                                                                                                                                    ,
    required: true,
    unique: true,
  },
  state: {
    type: String                                                                                                                                                    ,
    required: true,
    unique: true,
  },
  country: {
    type: String                                                                                                                                                    ,
    required: true,
    unique: true,
  },
});

export const customerModel = model('customer', customerSchema);