import { Router } from 'express'
import multer from 'multer'

import { multerConfig } from '../config/multer'
import { CreateUserController } from '../controllers/create-user'
import { UpdateProfilePicController } from '../controllers/update-profile-pic'

const upload = multer(multerConfig)
const usersRouter = Router()

const createUsersController = new CreateUserController()
const updateProfilePicController = new UpdateProfilePicController()

usersRouter.post('/', createUsersController.handle)
usersRouter.patch('/', upload.single('pic'), updateProfilePicController.handle)

export { usersRouter }
