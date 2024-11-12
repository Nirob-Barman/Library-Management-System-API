import express from "express";
import { BorrowedBookController } from "./borrowRecord.controller";

const router = express.Router();

router.post("/borrow", BorrowedBookController.borrowBookFromDB);

export const BorrowedBookRoutes = router;