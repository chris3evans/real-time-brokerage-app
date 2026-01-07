import { PrismaClient } from '@prisma/client/extension'
const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      username: 'TestTrader',
      balance: 100000.0,
    },
  })
  console.log('User created successfully:', newUser)
}

main()