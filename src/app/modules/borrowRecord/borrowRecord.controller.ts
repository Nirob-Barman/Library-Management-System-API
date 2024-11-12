import { RequestHandler } from "express";
import catchAsync from "../../shared/catchAysnc";
import { BorrowedBookService } from "./borrowRecord.service";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";

const borrowBookFromDB: RequestHandler = catchAsync(async (req, res) => {
    const { bookId, memberId } = req.body;
    
    const result = await BorrowedBookService.borrowBookFromDB(bookId, memberId);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: "Book borrowed successfully",
        data: result,
    });
});


export const BorrowedBookController = {
    borrowBookFromDB
};