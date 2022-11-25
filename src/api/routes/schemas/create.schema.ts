import { schemaResponse } from "./response.schema";
import { customerSchema } from "./customer.schema";
import {
  AggrementStatus,
  CustomerStatus,
  CustomerType,
  ResidueStatus,
  ResidueType,
  ScoreStatus,
} from "../../../domain/enum/customer.enum";

export const createSchema = {
  body: {
    type: "object",
    required: ["keoId", "name", "nidType", "nid", "status", "type"],
    properties: {
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
          type: "object",
          properties: {
            address: { type: "string" },
            city: { type: "string" },
            state: { type: "string" },
            detail: { type: "string" },
          },
        },
      },
      financials: {
        type: "array",
        items: {
          type: "object",
          properties: {
            source: { type: "string" },
            cutoffDate: { type: "string" },
            patrimony: { type: "number" },
            assets: { type: "number" },
            annualSales: { type: "number" },
            financialDebt: { type: "number" },
            grossMargin: { type: "number" },
            utility: { type: "number" },
            accountsReceivable: { type: "number" },
            debtsToPay: { type: "number" },
          },
        },
      },
      scores: {
        type: "array",
        items: {
          type: "object",
          properties: {
            amountUsd: { type: "number" },
            status: { type: "string", enum: Object.values(ScoreStatus) },
            features: { type: "string" },
          },
        },
      },
      aggrements: {
        type: "array",
        items: {
          type: "object",
          properties: {
            min: { type: "number" },
            max: { type: "number" },
            term: { type: "number" },
            rate: { type: "number" },
            lateRate: { type: "number" },
            costRate: { type: "number" },
            taxesRate: { type: "number" },
            status: { type: "string", enum: Object.values(AggrementStatus) },
          },
        },
      },
      owners: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            birthdate: { type: "string" },
            phone: { type: "string" },
            email: { type: "string" },
            title: { type: "string" },
            ssn: { type: "string" },
            ownershipPercentage: { type: "number" },
            location: {
              type: "object",
              properties: {
                address: { type: "string" },
                city: { type: "string" },
                state: { type: "string" },
                detail: { type: "string" },
              },
            },
          },
        },
      },
      residues: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: { type: "string", enum: Object.values(ResidueType) },
            status: { type: "string", enum: Object.values(ResidueStatus) },
            paidAt: { type: "string" },
            raamountte: { type: "number" },
          },
        },
      },
      stageInstances: {
        type: "array",
        items: {
          type: "object",
          properties: {
            workflowId: { type: "string" },
            state: { type: "string" },
            oldState: { type: "string" },
            idTransaction: { type: "string" },
          },
        },
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
