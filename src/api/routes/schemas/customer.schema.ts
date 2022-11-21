import { CustomerStatus, CustomerType, Scoretatus, SubscriptionStatus } from "../../../domain/enum/customer.enum";

export const customerSchema = {
  attributes: [
    "_id",
    "keoId",
    "name",
    "nidType",
    "nid",
    "status",
    "type",
    "locations",
    "subscriptions",
    "createdAt",
    "updatedAt",
  ],
  properties: {
    _id: {
      type: "string",
    },
    keoId: {
      type: "string",
    },
    name: {
      type: "string",
    },
    nidType: {
      type: "string",
    },
    nid: {
      type: "string",
    },
    status: {
      type: "string",
      enum: Object.values(CustomerStatus),
    },
    type: {
      type: "string",
      enum: Object.values(CustomerType),
    },
    locations: {
      type: "array",
        items: {
          type: 'object',
          properties: {
            address: { type: 'string' },
            city: { type: 'string' },
            state: { type: 'string'},
            detail: { type: "string" }
          },
        },
    },
    subscriptions: {
      type: "array",
      items: {
        type: 'object',
        properties: {
          productCode: { type: 'string' },
          productCustomerId: { type: 'string' },
          status: {
            type: 'string',
            enum: Object.values(SubscriptionStatus),
          },
          scores: {
            type: "array",
            items: {
              type: 'object',
              properties: {
                score: { type: 'number' },
                status: { type: 'string', enum: Object.values(Scoretatus) },
                features: { type: 'object' },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },
              },
            },
          }
        },
      },
    },
    createdAt: {
      type: "string",
      format: "date-time",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
    },
  },
};
