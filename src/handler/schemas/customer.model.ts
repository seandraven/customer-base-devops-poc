import { model } from "mongoose";
import { ICustomerEntity } from "./customer.interface";
import { customerSchema } from "./customer.schema";

export const Customer = model<ICustomerEntity>("Customer", customerSchema);
