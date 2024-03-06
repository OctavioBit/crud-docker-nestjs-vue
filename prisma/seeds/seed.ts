import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function doSeed() {

  const WhatWeDoInTheShadows = await prisma.pelicula.upsert({
    where: {},
    update: {},
    create: {
      where: {},
      nombre: 'What we do in the shadows',      
      generoPelicula: {
        create: {
          nombre: 'Comedia'          
        },
      },
    },
  })

  console.log({ WhatWeDoInTheShadows })
}

doSeed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })