import prisma from "../../shared/prisma";

const createMember = async (payload: any) => {
    const createdMember = await prisma.member.create({
        data: {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            membershipDate: payload.membershipDate,
        },
    });
    return createdMember;
};

const getAllMembersFromDB = async () => {
    const members = await prisma.member.findMany();
    return members;
};

const getMemberByIdFromDB = async (memberId: string) => {
    const member = await prisma.member.findUnique({
        where: { memberId },
    });
    return member;
};

const updateMemberIntoDB = async (memberId: string, payload: any) => {
    const updatedMember = await prisma.member.update({
        where: { memberId },
        data: {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
        },
    });

    return updatedMember;
};

const deleteMemberFromDB = async (memberId: string) => {
    const deletedMember = await prisma.member.delete({
        where: { memberId },
    });
    return deletedMember;
};

export const MemberService = {
    createMember,
    getAllMembersFromDB,
    getMemberByIdFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB
};