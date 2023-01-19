import { appConfig } from "../src/infra/config/app.config";
import { App } from "../src/server/app";
import { ControllerTest } from "./controller/controller.test";

class Tester {
  private app: App;
  private url: string;

  constructor() {
    this.app = new App();
    this.url = `http://localhost:${appConfig.server.port}/api`;
  }

  public startAutomatedTest = async () => {
    await this.app.start();
    this.startControllerTest();
  };

  public startControllerTest = () => {
    new ControllerTest(this.url).startTest();
  };
}

const testerAgent = new Tester();
testerAgent.startAutomatedTest().catch(err => console.log(err));
