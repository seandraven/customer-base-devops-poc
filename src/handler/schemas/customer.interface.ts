import { CustomerStatus, CustomerType } from "../../domain/enum/customer.enum";
import { LocationVo } from "./vo/location";
import { SuscriptionVo } from "./vo/subscription";

export interface ICustomerEntity {
  _id?: string,
  keoId: string;
  nidType: string;
  nid: string;
  name: string;
  status: CustomerStatus;
  type: CustomerType;
  locations: Array<LocationVo>;
  subscriptions: Array<SuscriptionVo>;
  createdAt?: Date;
  updatedAt?: Date;
}
