export class Result<T> {
  data: T;
  message: string;
  statuscode = 0;
  timestamp: string;
  count: number;
  errors?: string[];

  constructor() {
    this.data = null;
    this.message = null;
    this.timestamp = Date.now().toLocaleString();
    this.count = 0;
    this.errors = undefined;
  }

  public setResponse(data: T, code: number, message?: string, count?: number, errors?: string[]) {
    this.data = data;
    this.message = message;
    this.statuscode = code;
    this.count = count
      ? count
      : this.data && this.data["length"]
      ? this.data["length"]
      : data != null
      ? 1
      : 0;
    this.errors = errors || undefined;
  }
}
