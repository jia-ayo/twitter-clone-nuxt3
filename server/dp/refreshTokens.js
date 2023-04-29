import { prisma } from "."
export const createRefresfToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}