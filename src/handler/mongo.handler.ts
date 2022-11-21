import { LogData, logger } from "../infra/logging/logging";
import { ICustomerEntity } from "./schemas/customer.interface";
import { Customer } from "./schemas/customer.model";

export class MongoHandler {

  create = async (customer: ICustomerEntity): Promise<ICustomerEntity> => {
    customer.createdAt = new Date();
    logger.debug(new LogData("MongoHandler",{customer}), `create`);
    return await Customer.create(customer);
  };

  delete = async (id: string): Promise<void> => {
    logger.debug(new LogData("MongoHandler",{id}), `delete`);
    await Customer.findByIdAndDelete({ _id: id });
  };

  find = async(customer: ICustomerEntity): Promise<ICustomerEntity> => {
    logger.debug(new LogData("MongoHandler",{customer}), `find`);
    return await Customer.findOne({$or: [{ 'nidType': customer.nidType, 'nid': customer.nid }, {'keoId': customer.keoId }]});
  }

  info = async(id: string): Promise<ICustomerEntity> => {
    logger.debug(new LogData("MongoHandler",{id}), `info`);
    return await Customer.findById(id)
  }

  update = async (customer: ICustomerEntity): Promise<ICustomerEntity> => {
    customer.updatedAt =new Date();
    logger.debug(new LogData("MongoHandler",{customer}), `update`);
    return await Customer.findByIdAndUpdate({ _id: customer["_id"]}, customer);
  };

}
