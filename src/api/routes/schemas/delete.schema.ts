export const deleteSchema = {
  query: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "string",
      },
    },
  },
  response: {
    200: {},
  },
  tags: ["customer"],
};
