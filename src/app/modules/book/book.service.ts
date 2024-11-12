import prisma from "../../shared/prisma";

const createBook = async (payload: any) => {
    const newBook = await prisma.book.create({
        data: {
            title: payload.title,
            genre: payload.genre,
            publishedYear: payload.publishedYear,
            totalCopies: payload.totalCopies,
            availableCopies: payload.availableCopies,
        },
    });

    return newBook;
};

export const BookService = {
    createBook
};
