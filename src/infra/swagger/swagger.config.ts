import { FastifyRegisterOptions } from "fastify";

export const openApiConfig: FastifyRegisterOptions<any> = {
  openapi: {
    info: {
      version: "0.0.1",
      title: "Customer Base",
      description: "Customer base",
    },
    servers: [
      {
        url: "http://localhost:4010/",
      },
      {
        url: "https://gc-k-gbl-bricks-dev.uc.r.appspot.com/",
      },
    ],
  },
  exposeRoute: true,
};
