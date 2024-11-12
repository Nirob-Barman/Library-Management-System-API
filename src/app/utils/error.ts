class AppError extends Error {
    statusCode: number;
    status: string;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends AppError {
    constructor(message: string) {
        super(message, 400);
    }
}

class NotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404);
    }
}

export { AppError, BadRequestError, NotFoundError };
