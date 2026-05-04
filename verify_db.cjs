const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function checkUser() {
  try {
    const users = await prisma.user.findMany({
      include: { talentProfile: true },
      orderBy: { id: 'desc' },
      take: 5
    })
    console.log('--- RECENT SIGNUPS ---')
    users.forEach(u => {
      console.log(`Name: ${u.name} | Email: ${u.email} | Role: ${u.role}`)
      if (u.talentProfile && u.talentProfile.length > 0) {
        console.log(`   Profile: ${u.talentProfile[0].selectedRole} verified by ${u.talentProfile[0].trainer}`)
      } else {
        console.log('   Profile: [PENDING ONBOARDING]')
      }
    })
    console.log('-----------------------')
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkUser()
