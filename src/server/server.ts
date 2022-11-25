import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import fastifySwagger from "@fastify/swagger";
import { pipe } from "ramda";
import { logger } from "../infra/logging/logging";
import { openApiConfig } from "../infra/swagger/swagger.config";
import PrincipalRoutes from "../api/routes/index.route";

export default class Server {
  private port: number;
  server: FastifyInstance;

  private principalRoutes: PrincipalRoutes;

  constructor(port: number) {
    this.port = port;
    this.principalRoutes = new PrincipalRoutes();
  }

  /**
   * Builds a fastify server
   */
  private build = (): FastifyInstance => {
    const server = Fastify({ logger: true });

    // Plugins
    server.register(multipart, { attachFieldsToBody: true });
    server.register(fastifySwagger, openApiConfig);
    server.register(this.loadRoutes, { prefix: "/api" });
    server.register(cors, { origin: "*" });

    return server;
  };

  private loadRoutes = (server: FastifyInstance, _, done): void => {
    this.principalRoutes.getRoutes(server);
    done();
  };

  private exitProcess = (): void => process.exit(1);

  private handleServerError = (err) => {
    logger.error(err);
    this.exitProcess();
  };

  /**
   * Starts a server
   */
  private start = async (server: FastifyInstance): Promise<void> => {
    try {
      this.server = server;
      await server.listen({ port: this.port });
    } catch (err) {
      this.handleServerError(err);
    }
  };

  async close(): Promise<void> {
    await this.server.close();
  }

  /**
   * Configures the node process
   */
  private configureProcess = (): void => {
    /* process.on("uncaughtException", errors.handler.handle);
    process.on("unhandledRejection", errors.handler.handle); */
  };

  listen(): void {
    const run = pipe(this.configureProcess, this.build, this.start);
    run();
  }
}
