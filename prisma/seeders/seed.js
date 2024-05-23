import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

async function main() {
    // Create an admin user
    let adminUser = await prisma.user.findUnique({
        where: {
            email: "admin@example.com",
        },
    })
    if (!adminUser) {
        adminUser = await prisma.user.create({
            data: {
                email: "admin@example.com",
                password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
                role: "ADMIN",
                avatar: faker.image.avatar(),
            },
        })
    }
    // Create a simple user for testing purposes
    let testUser = await prisma.user.findUnique({
        where: {
            email: "user@example.com",
        },
    })

    if (!testUser) {
        testUser = await prisma.user.create({
            data: {
                email: "user@example.com",
                password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
                role: "USER",
                avatar: faker.image.avatar(),
            },
        })
    }

    //message during seed process
    console.log("Seeding finished. It's all good!")
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })