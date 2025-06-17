import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name: string
      description: string
      price: number
      imageUrl: string
    }

    const { name, description, price, imageUrl } = body

    if (!name || !description || !price || !imageUrl) {
      return NextResponse.json(
        { error: 'Missing name, description, price, or imageUrl' },
        { status: 400 }
      )
    }

    const newMenuItem = await prisma.menuItem.create({
      data: { name, description, price, imageUrl },
    })

    return NextResponse.json(newMenuItem)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function GET() {
  const items = await prisma.menuItem.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(items)
}
