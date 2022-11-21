import { schemaResponse } from "./response.schema";
import { customerSchema } from "./customer.schema";

export const infoSchema = {
  query: {
    type: "object",
    properties: {
      nidType: {
        type: "string",
      },
      nid: {
        type: "string",
      },
      keoId: {
        type: "string",
      }
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        ...schemaResponse({
          ...customerSchema.properties,
        }),
      },
    },
  },
  tags: ["customer"],
};
