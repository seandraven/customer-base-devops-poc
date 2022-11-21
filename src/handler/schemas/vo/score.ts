import { Scoretatus } from "../../../domain/enum/customer.enum";

export interface ScoreVo {
  score: number;
  status: Scoretatus;
  features: string;
  createdAt: Date;
  updatedAt: Date;
}