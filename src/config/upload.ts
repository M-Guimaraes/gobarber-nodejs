import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';

const tmpfolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpfolder: string;
  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: {
      storage: StorageEngine;
    };
    aws: {
      bucket: string;
    };
  };
}

export default {
  driver: process.env.STORAGE_DRIVER,

  tmpfolder,
  uploadsFolder: path.resolve(tmpfolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpfolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: 'nome do bucket',
    },
  },
} as IUploadConfig;
