import { FastifyRegisterOptions } from "fastify";

export const openApiConfig: FastifyRegisterOptions<any> = {
  openapi: {
    info: {
      version: "0.0.1",
      title: "BPM product",
      description: "BPM product core",
    },
    servers: [
      {
        url: "http://localhost:4002/",
      },
      {
        url: "http://test-1z03lbm8ob1xs.apigateway.gc-k-gbl-lab.cloud.goog",
      }
    ],
    
  },
  exposeRoute: true,
};