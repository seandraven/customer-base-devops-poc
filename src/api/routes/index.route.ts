import { FastifyInstance } from "fastify";
import CreateController from "../controllers/create.controller";
import DeleteController from "../controllers/delete.controller";
import FindController from "../controllers/find.controller";
import InfoController from "../controllers/info.controller";
import UpdateController from "../controllers/update.controller";
import { createSchema } from "./schemas/create.schema";
import { infoSchema } from "./schemas/info.schema";

export default class PrincipalRoutes {
  private createController: CreateController;
  private deleteController: DeleteController;
  private findController: FindController;
  private infoController: InfoController;
  private updateController: UpdateController;

  constructor() {
    this.createController = new CreateController();
    this.deleteController = new DeleteController();
    this.findController = new FindController();
    this.infoController = new InfoController();
    this.updateController = new UpdateController();
  }

  getRoutes = (server: FastifyInstance): void => {
    server.post(
      "/customer.create",
      { schema: createSchema },
      this.createController.handle
    );
    server.delete(
      "/customer.delete",
      { schema: infoSchema },
      this.deleteController.handle
    );
    server.get(
      "/customer.find",
      { schema: infoSchema },
      this.findController.handle
    );
    server.get(
      "/customer.info",
      { schema: infoSchema },
      this.infoController.handle
    );
    server.patch(
      "/customer.update",
      { schema: infoSchema },
      this.updateController.handle
    );
    
  }
}
