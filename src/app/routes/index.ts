import express from "express";
import { BookRoutes } from "../modules/book/book.route";
import { MemberRoutes } from "../modules/member/member.route";
const router = express.Router();

const moduleRoutes = [
    {
        path: "/books",
        route: BookRoutes,
    },
    {
        path: "/members",
        route: MemberRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;