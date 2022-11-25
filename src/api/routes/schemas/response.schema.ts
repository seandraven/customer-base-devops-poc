export const schemaResponse = (properties: { [key: string]: any }) => {
  return {
    statuscode: {
      type: "number",
    },
    timestamp: {
      type: "string",
      format: "date-time",
    },
    count: {
      type: "integer",
    },
    data: {
      type: "object",
      properties: {
        ...properties,
      },
    },
    errors: {
      type: "array",
      items: {
        type: "object",
      },
    },
  };
};
