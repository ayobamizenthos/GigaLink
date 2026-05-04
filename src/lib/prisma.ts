import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // During Vercel build, we don't have the DATABASE_URL, so we bypass connection
  if (process.env.NEXT_PHASE === 'phase-production-build') {
    return {} as PrismaClient
  }
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
