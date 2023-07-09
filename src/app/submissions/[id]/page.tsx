import { notFound } from 'next/navigation'

import Submission from '@/components/Submission/Submission'
import { TaskLayout } from '@/components/Task/Layout'
import prisma from '@/lib/prisma'

export default async function Submissions({
  params
}: {
  params: { id: string }
}) {
  const id = +params.id

  const task = (
    await prisma.submission.findUnique({
      where: { id },
      select: {
        task: true
      }
    })
  )?.task

  if (!task) {
    notFound()
  }

  return (
    <TaskLayout task={task} type="submission">
      <Submission task={task} submissionID={id} />
    </TaskLayout>
  )
}