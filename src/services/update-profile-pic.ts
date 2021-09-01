import { PrismaUsersRepository } from '../prisma/repos/users'

type Params = { name: string, pic: string }

export class UpdateProfilePicService {
  async execute ({ name, pic }: Params): Promise<string> {
    const usersRepo = new PrismaUsersRepository()
    const exists = await usersRepo.findByName({ name })
    if (!exists) {
      throw new Error('User not found')
    }
    const picture = await usersRepo.updatePic({ name, pic })
    return picture
  }
}
