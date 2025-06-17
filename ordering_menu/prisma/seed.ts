// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Nasi Goreng',
        description: 'Traditional fried rice from Brunei Darussalam.',
        price: 14.5,
        imageUrl: '/Nasi-Goreng_1-1.webp',
      },
      {
        name: 'Sup Ayam',
        description: 'Bruneian chicken soup.',
        price: 14.5,
        imageUrl: '/sup_ayam.jpg',
      },
      {
        name: 'Ikan Goreng',
        description: 'Crispy turmeric fried fish.',
        price: 10.5,
        imageUrl: '/Turmeric-Fried-Fish_1.jpg',
      },
    ],
  })
}

main()
  .then(() => {
    console.log('Seeding successful!')
    return prisma.$disconnect()
  })
  .catch(e => {
    console.error('Seeding error:', e)
    return prisma.$disconnect()
  })
