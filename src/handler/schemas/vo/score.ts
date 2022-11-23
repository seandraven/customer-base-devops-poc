import { ScoreStatus } from "../../../domain/enum/customer.enum";

export interface ScoreVo {
  amountUsd: number;
  status: ScoreStatus;
  features: string;
}