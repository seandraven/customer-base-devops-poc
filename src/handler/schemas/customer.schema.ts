import mongoose from 'mongoose';
import { ICustomerEntity } from "./customer.interface";
import MongooseHistoryPlugin from 'mongoose-history-plugin';

const customerSchema = new mongoose.Schema<ICustomerEntity>({
  keoId: { type: String, required: true },
  name: { type: String, required: true },
  nidType: { type: String, required: true },
  nid: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  locations: { type: [] },
  financials: { type: [] },
  aggrements: { type: [] },
  owners: { type: [] },
  residues: { type: [] },
  scores: { type: [] },
  stageInstances: { type: [] },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, { versionKey: false });

let options = {
  mongoose: mongoose,
  modelName: '_history-customers',
};

customerSchema.plugin(MongooseHistoryPlugin(options));

export { customerSchema };