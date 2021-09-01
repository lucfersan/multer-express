import { Request, Response } from 'express'

import { UpdateProfilePicService } from '../services/update-profile-pic'

export class UpdateProfilePicController {
  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const updateProfilePicService = new UpdateProfilePicService()
      const { name } = req.body
      let pic: string
      if (req.file) {
        pic = req.file.filename
        const picture = await updateProfilePicService.execute({ name, pic })
        return res.status(201).json({ picture })
      } else {
        return res.status(400).json({ error: 'No picture was provided' })
      }
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
