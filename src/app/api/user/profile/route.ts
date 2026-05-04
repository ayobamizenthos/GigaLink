import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { talentProfile: true }
    })

    if (!dbUser || !dbUser.talentProfile) {
      // Return basic user info even if profile isn't complete
      const fullName = (user.firstName && user.lastName) 
        ? `${user.firstName} ${user.lastName}` 
        : 'Adaobi Eze'
        
      return NextResponse.json({ 
        user: {
          name: fullName,
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl || "/adaobi_headshot.png"
        },
        profile: null 
      })
    }

    return NextResponse.json({ 
      profile: dbUser.talentProfile, 
      user: {
        ...dbUser,
        imageUrl: user.imageUrl
      } 
    })
  } catch (error) {
    console.error('[PROFILE_GET]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
