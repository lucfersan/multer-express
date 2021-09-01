import crypto from 'crypto'
import multer from 'multer'
import { join } from 'path'

const uploadsFolder = join(__dirname, '../../tmp/uploads')

export const multerConfig = {
  uploadsFolder,
  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename (req, file, cb) {
      const fileHash = crypto.randomBytes(12).toString('hex')
      const filename = `${fileHash}-${file.originalname}`
      return cb(null, filename)
    }
  })
}
