import { RequestHandler } from "express";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAysnc";
import { BookService } from "./book.service";

const createBook: RequestHandler = catchAsync(async (req, res) => {
    const result = await BookService.createBook(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Book created successfully",
        data: result,
    });
});

export const BookController = {
    createBook
};