import { Session } from 'next-auth'

import prisma from '@/lib/prisma'

const checkOwnerPermissionOnAssessment = async (
  session: Session,
  assessmentId: string
) => {
  if (session.user.admin) return true

  const ownerOnAssessment = await prisma.ownerOnAssessment.findUnique({
    where: {
      userId_assessmentId: {
        userId: session.user.id!,
        assessmentId: assessmentId
      }
    }
  })

  return ownerOnAssessment !== null
}

export default checkOwnerPermissionOnAssessment
