import { schemaResponse } from "./response.schema";
import { customerSchema } from "./customer.schema";

export const infoSchema = {
  query: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
      },
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
