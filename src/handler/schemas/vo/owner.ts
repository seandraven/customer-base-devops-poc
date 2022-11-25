import { LocationVo } from "./location";

export interface OwnerVo {
  name: string;
  birthdate: Date;
  phone: string;
  email: string;
  title: string;
  ssn: string;
  ownershipPercentage: number;
  location: LocationVo;
}
