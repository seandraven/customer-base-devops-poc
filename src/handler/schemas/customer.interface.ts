import { CustomerStatus, CustomerType } from "../../domain/enum/customer.enum";
import { AggrementVo } from "./vo/aggrement";
import { FinancialVo } from "./vo/financial";
import { LocationVo } from "./vo/location";
import { OwnerVo } from "./vo/owner";
import { ResidueVo } from "./vo/residue";
import { ScoreVo } from "./vo/score";
import { StageInstanceVo } from "./vo/stageInstance";

export interface ICustomerEntity {
  _id?: string,
  keoId: string;
  nidType: string;
  nid: string;
  name: string;
  status: CustomerStatus;
  type: CustomerType;
  locations?: Array<LocationVo>;
  financials?: Array<FinancialVo>;
  aggrements?: Array<AggrementVo>;
  owners?: Array<OwnerVo>;
  residues?: Array<ResidueVo>;
  scores?: Array<ScoreVo>;
  stageInstances?: Array<StageInstanceVo>;
  createdAt?: Date;
  updatedAt?: Date;
}
