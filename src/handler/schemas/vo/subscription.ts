import { SubscriptionStatus } from "../../../domain/enum/customer.enum";
import { ScoreVo } from "./score";

export interface SuscriptionVo {
  productCode: string;
  productCustomerId: string;
  status: SubscriptionStatus;
  scores?: Array<ScoreVo>;
  createdAt?: Date;
  updatedAt?: Date;
}