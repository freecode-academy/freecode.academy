import { PrismaClient } from '@prisma/client'

interface CheckUserUniquenessParams {
  prisma: PrismaClient
  username: string | null | undefined
  email: string | null | undefined
  excludeUserId: string | undefined
}

interface CheckUserUniquenessResult {
  isUnique: boolean
  error?: string
}

/**
 * Проверяет уникальность username и email без учета регистра.
 * Username сохраняется в оригинальном регистре, но не должно быть дубликатов с разным регистром.
 * Email приводится к нижнему регистру при проверке.
 */
export async function checkUserUniqueness({
  prisma,
  username,
  email,
  excludeUserId,
}: CheckUserUniquenessParams): Promise<CheckUserUniquenessResult> {
  if (username) {
    const existingByUsername = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
        ...(excludeUserId && { id: { not: excludeUserId } }),
      },
      select: { id: true, username: true },
    })

    if (existingByUsername) {
      return {
        isUnique: false,
        error: `Пользователь с username "${existingByUsername.username}" уже существует`,
      }
    }
  }

  if (email) {
    const existingByEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
        ...(excludeUserId && { id: { not: excludeUserId } }),
      },
      select: { id: true, email: true },
    })

    if (existingByEmail) {
      return {
        isUnique: false,
        error: `Пользователь с email "${existingByEmail.email}" уже существует`,
      }
    }
  }

  return { isUnique: true }
}

/**
 * Ищет пользователя по username или email без учета регистра.
 * Используется для авторизации.
 */
export async function findUserCaseInsensitive(
  prisma: PrismaClient,
  where: { username?: string; email?: string }
) {
  if (where.username) {
    return prisma.user.findFirst({
      where: {
        username: {
          equals: where.username,
          mode: 'insensitive',
        },
      },
    })
  }

  if (where.email) {
    return prisma.user.findFirst({
      where: {
        email: {
          equals: where.email,
          mode: 'insensitive',
        },
      },
    })
  }

  return null
}
