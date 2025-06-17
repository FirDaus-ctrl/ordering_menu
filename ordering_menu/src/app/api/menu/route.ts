import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { name, description } = await req.json()

    if (!name || !description) {
      return NextResponse.json({ error: 'Missing name or description' }, { status: 400 })
    }

    const newMenuItem = await prisma.menuItem.create({
      data: { name, description },
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