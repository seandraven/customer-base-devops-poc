import { FastifyReply, FastifyRequest } from "fastify";
import { BaseController } from "./base/base.controller";
import { Result } from "./base/result";
import { MongoHandler } from "../../handler/mongo.handler";
import { ICustomerEntity } from "../../handler/schemas/customer.interface";

export default class UpdateController extends BaseController {
  
  handle = async (req: FastifyRequest, res: FastifyReply) => {
    const handler = new MongoHandler();
    await this.executionAPI<Result<ICustomerEntity>>(
      req,
      res,
      async () => {

        const customer = <ICustomerEntity>req.body;
        const result = await handler.update(customer);

        const response = new Result<ICustomerEntity>();
        response.setResponse(result, 201);
        return response;

      }
    );
  };
  
}
