// prisma/seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.dog.createMany({
    data: [
      {
        name: 'Rito',
        sex: 'Male',
        sterilized: false,
        birthdate: new Date('1991-04-11'),
      },
      {
        name: 'Broly',
        sex: 'Male',
        sterilized: true,
        birthdate: new Date('2008-02-11'),
      },
      {
        name: 'Coco',
        sex: 'Male',
        sterilized: true,
        birthdate: new Date('2015-11-11'),
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
