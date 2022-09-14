import {Status} from "./status.interface";

export interface Payment{
  amount: number,
  date: Date,
  status: Status,
  source: string,
}
