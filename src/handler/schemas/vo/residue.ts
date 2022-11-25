import { ResidueStatus, ResidueType } from "../../../domain/enum/customer.enum";

export interface ResidueVo {
  type: ResidueType;
  status: ResidueStatus;
  paidAt: Date;
  amount: number;
}
