import { User } from '@prisma/client'

import { PrismaUsersRepository } from '../prisma/repos/users'

type Params = { name: string }

export class CreateUserService {
  async execute ({ name }: Params): Promise<User> {
    const usersRepo = new PrismaUsersRepository()
    const exists = await usersRepo.findByName({ name })
    if (exists) {
      throw new Error('User with this name already exists')
    }
    const user = await usersRepo.create({ data: { name } })
    return user
  }
}
