import { FastifyInstance } from "fastify";
import CreateController from "../controllers/create.controller";
import DeleteController from "../controllers/delete.controller";
import FindController from "../controllers/find.controller";
import InfoController from "../controllers/info.controller";
import UpdateController from "../controllers/update.controller";
import { createSchema } from "./schemas/create.schema";
import { deleteSchema } from "./schemas/delete.schema";
import { findSchema } from "./schemas/find.schema";
import { infoSchema } from "./schemas/info.schema";
import { updateSchema } from "./schemas/update.schema";

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
      { schema: deleteSchema },
      this.deleteController.handle
    );
    server.post(
      "/customer.find",
      { schema: findSchema },
      this.findController.handle
    );
    server.get(
      "/customer.info",
      { schema: infoSchema },
      this.infoController.handle
    );
    server.patch(
      "/customer.update",
      { schema: updateSchema },
      this.updateController.handle
    );
  };
}
