import { PrismaClient } from '@prisma/client'

(async () => {
    const prisma = new PrismaClient()

    const user = await prisma.user.create({
        data: {
            username: 'aidak'
        }
    })

    console.log('user: ', user)

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { username: 'wiletki' }
    })

    console.log('updated user: ', updatedUser)

    const allUsers = await prisma.user.findMany()

    console.log('all users: ', allUsers)

    await prisma.user.deleteMany()
})()