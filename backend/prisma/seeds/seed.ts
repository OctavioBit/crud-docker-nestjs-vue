// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.dogs.createMany({
    data: [
      {
        name: 'Max',
        sex: 'Male',
        sterilized: true,
        birthdate: new Date('2020-01-15'),
      },
      {
        name: 'Bella',
        sex: 'Female',
        sterilized: false,
        birthdate: new Date('2019-05-23'),
      },
      {
        name: 'Rocky',
        sex: 'Male',
        sterilized: true,
        birthdate: new Date('2018-08-10'),
      },
    ],
  })
}

main()
  .then(() => {
    console.log('Seed completed.')
    return prisma.$disconnect()
  })
  .catch((e) => {
    console.error(e)
    return prisma.$disconnect()
  })
