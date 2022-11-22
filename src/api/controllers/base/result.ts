export class Result<T> {
  data: T;
  message: string;
  statuscode = 0;
  timestamp: string;
  count: number;
  totalRecords: number;
  errors?: string[];

  constructor() {
    this.data = null;
    this.message = null;
    this.timestamp = Date.now().toLocaleString();
    this.count = 0;
    this.totalRecords = null;
    this.errors = undefined;
  }

  public setResponse(data: T, code: number, message?: string, totalRecords?: number, errors?: string[]) {
    this.data = data;
    this.message = message;
    this.statuscode = code;
    this.count = data != null
      ? this.data["length"]
      : 0;
    this.totalRecords = totalRecords || 0;
    this.errors = errors || undefined;
  }
}
