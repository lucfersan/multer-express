import { Request, Response } from 'express'

import { CreateUserService } from '../services/create-user'

export class CreateUserController {
  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const createUserService = new CreateUserService()
      const { name } = req.body
      const user = await createUserService.execute({ name })
      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
