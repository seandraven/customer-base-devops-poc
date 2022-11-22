import { BusinessError } from "../infra/error/validation.error";
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
    const response = await Customer.findByIdAndDelete({ _id: id });
    if(!response) throw new BusinessError(`Customer with id=${id} not foud`);
  };

  find = async(customer: ICustomerEntity): Promise<ICustomerEntity[]> => {
    logger.debug(new LogData("MongoHandler",{customer}), `find`);
    const response = await Customer.find(customer);
    if(!response) throw new BusinessError(`Customer with filter=${JSON.stringify(customer)} not foud`);
    return response;
  }

  info = async(id: string): Promise<ICustomerEntity> => {
    try{
      logger.debug(new LogData("MongoHandler",{id}), `info`);
      return await Customer.findById(id);
    }catch(error){
      throw new BusinessError(`Customer with id=${id} not foud 2 `);
    }
  }

  update = async (customer: ICustomerEntity): Promise<ICustomerEntity> => {
    customer.updatedAt =new Date();
    logger.debug(new LogData("MongoHandler",{customer}), `update`);
    const response = await Customer.findByIdAndUpdate({ _id: customer["_id"]}, customer);
    if(!response) throw new BusinessError(`Customer with id=${customer["_id"]} not foud`);
    return response;
  };

}
