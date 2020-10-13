class AppError {
  public readonly message: string;

  public readonly statusCode: number | undefined;

  constructor(message: string, statusCode?: number | undefined) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
