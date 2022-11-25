import { AggrementStatus } from "../../../domain/enum/customer.enum";

export interface AggrementVo {
  min: number;
  max: number;
  term: number;
  rate: number;
  lateRate: number;
  costRate: number;
  taxesRate: number;
  status: AggrementStatus;
}
