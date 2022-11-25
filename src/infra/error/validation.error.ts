import { CustomError } from "ts-custom-error";

export class ValidationError extends CustomError {
  code = 422;
  public constructor(message = "Validation error", private errors: any[]) {
    super(message);
    console.log("validation errors:", this.errors);
  }
}

export class BusinessError extends CustomError {
  code = 502;
  public constructor(message = "Business error") {
    super(message);
    console.log("Business errors:", message);
  }
}

export class SystemError extends CustomError {
  code = 500;
  public constructor(message = "System Error", private errors: any[]) {
    super(message);
    console.log("System errors:", this.errors);
  }
}
