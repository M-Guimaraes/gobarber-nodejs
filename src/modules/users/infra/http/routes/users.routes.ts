import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';

import multer from 'multer';
import uploadConfig from '@config/upload';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const usersRouter = Router();
const upload = multer(uploadConfig.multer);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
