import { customerSchema } from "./customer.schema";
import { AggrementStatus, CustomerStatus, CustomerType, ResidueStatus, ResidueType, ScoreStatus } from "../../../domain/enum/customer.enum";
import { schemaResponseList } from "./response-list.schema";

export const findSchema = {
  body: {
    type: "object",
    required: [],
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
      financials: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            source: { type: 'string' },
            cutoffDate: { type: 'string' },
            patrimony: { type: 'number' },
            assets: { type: 'number' },
            annualSales: { type: 'number' },
            financialDebt: { type: 'number' },
            grossMargin: { type: 'number' },
            utility: { type: 'number' },
            accountsReceivable: { type: 'number' },
            debtsToPay: { type: 'number' },
          },
        },
      },
      scores: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            amountUsd: { type: 'number' },
            status: { type: 'string', enum: Object.values(ScoreStatus) },
            features: { type: 'string' },
          },
        },
      },
      aggrements: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            min: { type: 'number' },
            max: { type: 'number' },
            term: { type: 'number' },
            rate: { type: 'number' },
            lateRate: { type: 'number' },
            costRate: { type: 'number' },
            taxesRate: { type: 'number' },
            status: { type: 'string', enum: Object.values(AggrementStatus) },
          },
        },
      },
      owners: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            birthdate: { type: 'string' },
            phone: { type: 'string' },
            email: { type: 'string' },
            title: { type: 'string' },
            ssn: { type: 'string' },
            ownershipPercentage: { type: 'number' },
            location: {
              type: 'object',
              properties: {
                address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string'},
                detail: { type: "string" }
              },
            },
          },
        },
      },
      residues: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            type: { type: 'string', enum: Object.values(ResidueType) },
            status: { type: 'string', enum: Object.values(ResidueStatus) },
            paidAt: { type: 'string' },
            raamountte: { type: 'number' },            
          },
        },
      },
      stageInstances: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            workflowId: { type: 'string' },
            state: { type: 'string' },
            oldState: { type: 'string' },
            idTransaction: { type: 'string' },
          },
        },
      },
      page: {
        type: "number",
      },
      limit: {
        type: "number",
      },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        ...schemaResponseList({
          ...customerSchema.properties,
        }),
      },
    }
  },
  tags: ["customer"],
};
