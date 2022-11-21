import { FastifyReply, FastifyRequest } from "fastify";
import { Result } from "./result";
import { v4 as uuidv4 } from 'uuid';
import { AsyncLocalStorage } from "async_hooks";
import { LogData, logger } from "../../../infra/logging/logging";
import { BusinessError, SystemError, ValidationError } from "../../../infra/error/validation.error";

export class BaseController {
  
  async executionAPI<T>(
    request: FastifyRequest,
    response: FastifyReply,
    body: () => Promise<T>
  ): Promise<void> {
    try {

      const asyncLocalStorage = new AsyncLocalStorage();
      global.asyncLocalStorage = asyncLocalStorage;

      const transactionId = request.headers.transactionId || uuidv4();
      const controlData = {
        transactionId,
        method: request.method,
        url: request.url,
      }
      
      await asyncLocalStorage.run(controlData, async () => {    
        
        logger.info(new LogData(
          "Start transaction",
          {
            query: request.query,
            body: request.body,
          }
        ), `START: ${controlData.method} ${controlData.url}`);

        const data = await body();
    
        logger.info(new LogData(
          "End transaction",
        ), `END: ${controlData.method} ${controlData.url} - ${response.statusCode}`);
        
        response.send(data);

      });

    } catch (ex) {
      let code: number;
      const result = new Result<any>();
      result.statuscode = ex.code;
      result.message = ex.message;

      logger.error(new LogData(
        "Error transaction",
        {errors: ex.errors, response: ex.errors?.response?.data}
      ), `ERROR: ${ex.code} - ${ex.message}`);

      switch (ex.constructor) {
        case (ValidationError):
        case (BusinessError):
        case (SystemError):
          code = ex.code;
          result.errors = ex.errors?.response?.data;
          break;
        default:
          code = 500;
          break;
      }
      response.status(code).send(result); 
    }
  }
}
