import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

import multer from 'multer';
import uploadConfig from '@config/upload';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);
usersRouter.patch('/avatar', ensureAuthenticate, upload.single('avatar'), userAvatarController.update);

export default usersRouter;
