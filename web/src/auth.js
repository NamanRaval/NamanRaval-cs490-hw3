import { createDbAuthClient, createAuth } from '@redwoodjs/auth-dbauth-web'

const dbAuthClient = createDbAuthClient()

export const { AuthProvider, useAuth } = createAuth(dbAuthClient)

export const getCurrentUser = async (session) => {
    return await db.user.findUnique({
      where: { id: session.id },
      select: { id: true, email: true, roles: true },
    })
  }