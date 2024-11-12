import prisma from "../../shared/prisma";
import { validate as isUUID } from 'uuid';
import { BadRequestError, NotFoundError } from "../../utils/error";

const borrowBookFromDB = async (bookId: string, memberId: string) => {
    if (!isUUID(bookId)) {
        throw new BadRequestError(`Invalid book ID format. Please provide a valid UUID.`);
    }

    if (!isUUID(memberId)) {
        throw new BadRequestError(`Invalid member ID format. Please provide a valid UUID.`);
    }

    return await prisma.$transaction(async (prisma) => {
        const book = await prisma.book.findUnique({
            where: { bookId },
        });

        if (!book) {
            throw new NotFoundError(`Oops! The book with ID ${bookId} could not be found. Please check the ID and try again.`);
        }

        if (book.availableCopies <= 0) {
            throw new NotFoundError(`Sorry, the book "${book.title}" is currently out of stock and cannot be borrowed at the moment.`);
        }

        const member = await prisma.member.findUnique({
            where: { memberId },
        });

        if (!member) {
            throw new NotFoundError(`Sorry, the member with ID ${memberId} could not be found. Please check the ID and try again.`);
        }

        await prisma.book.update({
            where: { bookId },
            data: { availableCopies: { decrement: 1 } },
        });

        const borrowRecord = await prisma.borrowRecord.create({
            data: {
                bookId,
                memberId,
                borrowDate: new Date(),
            },
            select: {
                borrowId: true,
                bookId: true,
                memberId: true,
                borrowDate: true,
            },
        });

        return borrowRecord;
    });
};


export const BorrowedBookService = {
    borrowBookFromDB
};