import { ICustomerEntity } from "../../src/handler/schemas/customer.interface";
import { faker } from "@faker-js/faker";
import { CustomerStatus, CustomerType } from "../../src/domain/enum/customer.enum";

export class CreateInputMock {
  static create(): ICustomerEntity {
    const customer: ICustomerEntity = {
      keoId: faker.datatype.string(5),
      nidType: faker.datatype.string(5),
      nid: faker.datatype.string(5),
      name: faker.internet.email(),
      status: CustomerStatus.Active,
      type: CustomerType.Customer,
      locations: [{
        address: faker.datatype.string(5),
        city: faker.datatype.string(5),
        state: faker.datatype.string(5),
        detail: faker.datatype.string(5)
      }],
    };
    return customer;
  }
}
