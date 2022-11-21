import Server from "./server";
import { appConfig } from "../infra/config/app.config";
import "../infra/mongo/db.connection";

export class App {
  private server: Server;

  start(): void {
    const { port } = appConfig.server;
    this.server = new Server(port);
    this.server.listen();
  }

  async close(): Promise<void>{
    await this.server.close()
  }
}
