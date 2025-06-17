import Image from 'next/image'
import { prisma } from '@/lib/prisma'



export const dynamic = 'force-dynamic' // ensures SSR always runs fresh

export default async function Page() {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {menuItems.map(item => (
        <div
          key={item.id}
          className="border rounded-xl p-4 shadow-md hover:shadow-xl transition-all flex flex-col items-center max-w-sm"
        >
          <div className="w-60 h-60 relative overflow-hidden rounded-md">
            <Image
              src={item.imageUrl}
              alt={`Picture of ${item.name}`}
              fill
              className="grayscale blur-sm hover:grayscale-0 hover:blur-none transition-all duration-500 border border-gray-300 p-1 hover:scale-110"
            />
          </div>
          <p className="mt-4 max-w-md text-center text-gray-700">{item.description}</p>
          <p className="mt-2 text-lg font-semibold text-green-600">
            BND {item.price.toFixed(2)}
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Order
          </button>
        </div>
      ))}
    </div>
  )
}
