-- CreateTable
CREATE TABLE "borrowRecords" (
    "borrowId" UUID NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3),
    "bookId" UUID NOT NULL,
    "memberId" UUID NOT NULL,

    CONSTRAINT "borrowRecords_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE INDEX "borrowRecords_bookId_idx" ON "borrowRecords"("bookId");

-- CreateIndex
CREATE INDEX "borrowRecords_memberId_idx" ON "borrowRecords"("memberId");

-- AddForeignKey
ALTER TABLE "borrowRecords" ADD CONSTRAINT "borrowRecords_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("bookId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowRecords" ADD CONSTRAINT "borrowRecords_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("memberId") ON DELETE CASCADE ON UPDATE CASCADE;
