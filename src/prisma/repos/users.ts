import { Prisma, User } from '@prisma/client'

import { prisma } from '../client'

type createParams = Prisma.UserCreateArgs
type updatePicParams = {
  name: string
  pic: string
}
type findByName = Prisma.UserWhereUniqueInput

export class PrismaUsersRepository {
  async create ({ data }: createParams): Promise<User> {
    const user = await prisma.user.create({ data })
    return user
  }

  async updatePic ({ name, pic }: updatePicParams): Promise<string> {
    const user = await prisma.user.update({
      where: {
        name
      },
      data: {
        pic
      }
    })
    return user.pic ?? 'empty'
  }

  async findByName ({ name }: findByName): Promise<boolean> {
    const user = await prisma.user.findUnique({ where: { name } })
    return !!user
  }
}
