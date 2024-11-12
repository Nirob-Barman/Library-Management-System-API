import prisma from "../../shared/prisma";

const createBook = async (payload: any) => {
    const cretedBook = await prisma.book.create({
        data: {
            title: payload.title,
            genre: payload.genre,
            publishedYear: payload.publishedYear,
            totalCopies: payload.totalCopies,
            availableCopies: payload.availableCopies,
        },
    });
    return cretedBook;
};

const getAllBooksFromDB = async () => {
    const books = await prisma.book.findMany();
    return books;
};

const getBookByIdFromDB = async (bookId: string) => {
    const book = await prisma.book.findUnique({
        where: { bookId },
    });
    return book;
};

const updateBookIntoDB = async (bookId: string, payload: any) => {
    const updatedBook = await prisma.book.update({
        where: { bookId },
        data: {
            title: payload.title,
            genre: payload.genre,
            publishedYear: payload.publishedYear,
            totalCopies: payload.totalCopies,
            availableCopies: payload.availableCopies,
        },
    });

    return updatedBook;
};

const deleteBookFromDB = async (bookId: string) => {
    const deletedBook = await prisma.book.delete({
        where: { bookId },
    });

    return deletedBook;
};

export const BookService = {
    createBook,
    getAllBooksFromDB,
    getBookByIdFromDB,
    updateBookIntoDB,
    deleteBookFromDB
};
