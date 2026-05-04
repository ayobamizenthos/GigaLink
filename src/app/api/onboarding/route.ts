import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const body = await req.json()
    const { role, trainer, degree, location, bio } = body

    const fullName = (user.firstName && user.lastName) 
      ? `${user.firstName} ${user.lastName}` 
      : 'Adaobi Eze'

    // 1. Create or update User record using clerkId
    const dbUser = await prisma.user.upsert({
      where: { clerkId: userId },
      update: { 
        name: fullName,
        email: user.emailAddresses[0].emailAddress
      },
      create: {
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: fullName,
        role: 'TALENT'
      }
    })

    // 2. Upsert Talent Profile
    const profile = await prisma.talentProfile.upsert({
      where: { userId: dbUser.id },
      update: {
        selectedRole: role,
        trainer: trainer,
        degree: degree,
        location: location,
        bio: bio
      },
      create: {
        userId: dbUser.id,
        selectedRole: role,
        trainer: trainer,
        degree: degree,
        location: location,
        bio: bio
      }
    })

    return NextResponse.json({ success: true, profile })
  } catch (error) {
    console.error('[ONBOARDING_POST]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
