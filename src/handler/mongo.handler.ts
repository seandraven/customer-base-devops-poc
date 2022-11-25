import { BusinessError } from "../infra/error/validation.error";
import { LogData, logger } from "../infra/logging/logging";
import { ICustomerEntity } from "./schemas/customer.interface";
import { Customer } from "./schemas/customer.model";

export class MongoHandler {
  /**
   * Creates a customer
   * @param {ICustomerEntity} customer The customer
   * @returns {ICustomerEntity} The new customer
   */
  create = async (customer: ICustomerEntity): Promise<ICustomerEntity> => {
    customer.createdAt = new Date();
    logger.debug(new LogData("MongoHandler", { customer }), `create`);
    return await Customer.create(customer);
  };

  /**
   * Deletes a customer by Id
   * @param {string} id The customer Id
   */
  delete = async (id: string): Promise<void> => {
    logger.debug(new LogData("MongoHandler", { id }), `delete`);
    const response = await Customer.findByIdAndDelete({ _id: id });
    if (!response) throw new BusinessError(`Customer with id=${id} not foud`);
  };

  /**
   * Finds customers
   * @param {ICustomerEntity} customer The customer filter
   * @param {number} page The number page
   * @param {number} limit the page size
   * @returns {ICustomerEntity[]} The customer list
   */
  find = async (
    customer: ICustomerEntity,
    page: number,
    limit: number
  ): Promise<ICustomerEntity[]> => {
    logger.debug(new LogData("MongoHandler", { customer }), `find`);
    return await Customer.find(customer)
      .skip(page * limit)
      .limit(limit);
  };

  /**
   * Finds a customer by id
   * @param {string} id The customer id
   * @returns {ICustomerEntity} The customer
   */
  info = async (id: string): Promise<ICustomerEntity> => {
    try {
      logger.debug(new LogData("MongoHandler", { id }), `info`);
      return await Customer.findById(id);
    } catch (error) {
      throw new BusinessError(`Customer with id=${id} not foud`);
    }
  };

  /**
   * Updates a customer
   * @param {ICustomerEntity} customer The customer to update
   * @returns {ICustomerEntity} The updated customer
   */
  update = async (customer: ICustomerEntity): Promise<ICustomerEntity> => {
    logger.debug(new LogData("MongoHandler", { customer }), `update`);
    let customerFind;
    try {
      customerFind = await Customer.findById(customer["_id"]);
    } catch (error) {
      throw new BusinessError(`Customer with id=${customer["_id"]} not foud`);
    }

    Object.entries(customer).forEach(([key, value]) => {
      if (key !== "_id") customerFind[key] = value;
    });
    customerFind.updatedAt = new Date();
    return await customerFind.save();
  };

  /**
   * Counts customers by filter
   * @param {ICustomerEntity} customer The customer filter
   * @returns {number} The customer's count
   */
  count = async (customer: ICustomerEntity): Promise<number> => {
    logger.debug(new LogData("MongoHandler", { customer }), `count`);
    return await Customer.find(customer).count();
  };
}
