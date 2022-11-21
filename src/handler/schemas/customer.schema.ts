import { Schema } from "mongoose";
import { ICustomerEntity } from "./customer.interface";

export const customerSchema = new Schema<ICustomerEntity>({
  keoId: { type: String, required: true },
  name: { type: String, required: true },
  nidType: { type: String, required: true },
  nid: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  locations: { type: [] },
  subscriptions: { type: [] },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});
