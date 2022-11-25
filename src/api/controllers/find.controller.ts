import { FastifyReply, FastifyRequest } from "fastify";
import { BaseController } from "./base/base.controller";
import { Result } from "./base/result";
import { MongoHandler } from "../../handler/mongo.handler";
import { ICustomerEntity } from "../../handler/schemas/customer.interface";
import { appConfig } from "../../infra/config/app.config";

export default class FindController extends BaseController {
  handle = async (req: FastifyRequest, res: FastifyReply) => {
    const handler = new MongoHandler();
    await this.executionAPI<Result<ICustomerEntity[]>>(req, res, async () => {
      const customer = <ICustomerEntity>req.body;
      const page = req.body["page"] || 0;
      const limit = req.body["limit"] || appConfig.docDB.pageSize;
      const totalRecords = await handler.count(customer);
      const result = await handler.find(customer, page, limit);

      const response = new Result<ICustomerEntity[]>();
      response.setResponse(result, 201, null, totalRecords);
      return response;
    });
  };
}
